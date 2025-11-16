/* eslint-disable no-param-reassign */
/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
const connectDatabase = 'https://myportfolio-website-cb461-default-rtdb.firebaseio.com';

// ===============================
// WHEN DOCUMENT READY
// ===============================
$(document).ready(() => {
  const lastVisit = localStorage.getItem('lastVisit_VStorm');
  const now = Date.now();
  const oneDay = 16 * 60 * 60 * 1000; // 16 tiếng

  if (!lastVisit || now - lastVisit > oneDay) {
    GET('ACCESS', '#total-visit', 1);
    localStorage.setItem('lastVisit_VStorm', now);
  } else {
    GET('ACCESS', '#total-visit', 0);
  }

  GET('ENGAGEMENT', '#total-engagement', 0);
});

// -------------------------------
// HELPERS
// -------------------------------
function dbUrl(path, query) {
  // path WITHOUT leading/trailing slashes, example: 'ACCESS' or 'ACCESS/history'
  let url = `${connectDatabase}/${path}.json`;
  if (query) {
    const qs = Object.keys(query)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
      .join('&');
    url += `?${qs}`;
  }
  return url;
}

function nowIsoVN() {
  const d = new Date();
  d.setHours(d.getHours() + 7); // convert to VN time as you used before
  return d.toISOString();
}

// -------------------------------
// GET: Lấy dữ liệu (GET)
// -------------------------------
function GET(key, selector, increment) {
  fetch(dbUrl(key))
    .then(response => {
      if (!response.ok) {
        console.error('GET response not ok', response);
        return response.json().catch(() => null).then(body => { throw { response, body }; });
      }
      return response.json();
    })
    .then(data => {
      if (!data) data = {}; // safeguard

      const currentCount = typeof data.count === 'number' ? data.count : 0;
      const newCount = currentCount + increment;

      console.log('data: ', data);

      // Format value
      const reformatValue = newCount.toLocaleString('de-DE');
      $(selector).text(reformatValue);

      if (increment !== 0) {
        // Update count + latestUpdate and append to history
        updateCountAndHistory(key, newCount).catch(err => {
          console.error('updateCountAndHistory failed:', err);
        });
      }
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Lỗi GET:', error);
    });
}

// -------------------------------
// updateCountAndHistory
//  - PATCH count + latestUpdate
//  - POST new history entry { count, at }
//  - Trim history to maxItems
// -------------------------------
async function updateCountAndHistory(key, newCount, maxHistory = 10) {
  const vnTime = nowIsoVN();

  // 1) PATCH count + latestUpdate
  const patchBody = {
    count: newCount,
    latestUpdate: vnTime,
  };

  const patchResp = await fetch(dbUrl(key), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patchBody),
  });

  if (!patchResp.ok) {
    const body = await patchResp.text().catch(() => null);
    throw new Error(`PATCH failed: ${patchResp.status} ${patchResp.statusText} ${body}`);
  }

  // 2) POST into history (auto-id)
  const histEntry = { count: newCount, at: vnTime };
  const postResp = await fetch(dbUrl(`${key}/history`), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(histEntry),
  });

  if (!postResp.ok) {
    const body = await postResp.text().catch(() => null);
    throw new Error(`POST history failed: ${postResp.status} ${postResp.statusText} ${body}`);
  }

  // 3) Trim history if > maxHistory
  // Use shallow=true to quickly get keys count
  const shallowResp = await fetch(dbUrl(`${key}/history`, { shallow: true }));
  if (!shallowResp.ok) {
    // nothing to trim if cannot read
    console.warn('Cannot read history shallow to trim:', shallowResp.status, shallowResp.statusText);
    return;
  }

  const shallowData = await shallowResp.json(); // object of keys->true OR null
  if (!shallowData || typeof shallowData !== 'object') return;

  const keys = Object.keys(shallowData);
  const total = keys.length;
  if (total <= maxHistory) return;

  const excess = total - maxHistory;

  // Fetch oldest 'excess' items by orderBy="at"&limitToFirst=excess
  // Note: must encode orderBy parameter as quoted string: "\"at\"" or %22at%22
  const orderQuery = {
    orderBy: '"at"',
    limitToFirst: excess,
  };
  const oldestResp = await fetch(dbUrl(`${key}/history`, orderQuery));
  if (!oldestResp.ok) {
    console.warn('Cannot fetch oldest history to trim:', oldestResp.status, oldestResp.statusText);
    return;
  }

  const oldestData = await oldestResp.json();
  if (!oldestData || typeof oldestData !== 'object') return;

  // Build deletion object to PATCH { oldKey1: null, oldKey2: null, ... }
  const deletions = {};
  Object.keys(oldestData).forEach(k => { deletions[k] = null; });

  // PATCH to remove them in one request
  const delResp = await fetch(dbUrl(`${key}/history`), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(deletions),
  });

  if (!delResp.ok) {
    console.warn('Failed to delete old history entries:', delResp.status, delResp.statusText);
  } else {
    console.log(`Trimmed ${Object.keys(deletions).length} old history entries for ${key}`);
  }
}

// -------------------------------
// EVENT LISTENER — ENGAGEMENT
// -------------------------------
$(document).ready(() => {
  $('a').on('mousedown', function (event) {
    if ($(this).hasClass('preventEvent')) {
      event.preventDefault();
      return;
    }

    GET('ENGAGEMENT', '#total-engagement', 1);
  });
});

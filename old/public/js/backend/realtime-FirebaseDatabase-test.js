const connectDatabase = 'https://myportfolio-website-cb461-default-rtdb.firebaseio.com/.json';

$(document).ready(() => {
  const lastVisit = localStorage.getItem('lastVisit_VStorm');
  const now = new Date().getTime();
  // nữa ngày hay 12 tiếng sẽ reset
  const oneDay = 16 * 60 * 60 * 1000;

  if (!lastVisit || now - lastVisit > oneDay) {
    GET('count_access', '#total-visit', 1);
    localStorage.setItem('lastVisit_VStorm', now);
  } else {
    GET('count_access', '#total-visit', 0);
  }

  GET('total_engagement', '#total-engagement', 0);
});

// -- Lấy dữ liệu (GET)
function GET(name, id, increment) {
  // console.log(`--- GET<${name}> Database (RealTime) - by VStorm so Proo ---`);
  // key <name>_lastDate

  fetch(connectDatabase)
    .then(response => response.json())
    .then(data => {
      const value = data[name] + increment;

      // reformat value
      const reformatValue = value.toLocaleString('de-DE');

      $(id).text(reformatValue);

      if (increment !== 0) PATCH(name, value);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Lỗi:', error);
    });
}

// -- Cập nhật một phần (PATCH)
function PATCH(name, value) {
  // console.log(`--- PATCH<${name}> Database (RealTime) - by VStorm so Proo ---`);

  const now = new Date();
  now.setHours(now.getHours() + 7);
  const vnTime = now.toISOString();

  // key <name>_lastDate
  const dateName = `${name}_lastDate`;

  fetch(connectDatabase, {
    method: 'PATCH',
    body: JSON.stringify({
      [name]: value,
      [dateName]: vnTime,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    // eslint-disable-next-line no-console
    .catch(error => console.error(error));
}

// Add Engagements_event_listener

$(document).ready(() => {
  $('a').on('mousedown', function (event) {
    if ($(this).hasClass('preventEvent')) {
      event.preventDefault();
      return;
    }

    GET('total_engagement', '#total-engagement', 1);
  });
});

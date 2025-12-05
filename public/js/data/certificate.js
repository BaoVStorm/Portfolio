export const listCers = [
  {
    title: 'TalentGetGo Certificate',
    image: './assets/images/cerificate/talent-get-go.png',
    flex: '700px',
  },
  {
    title: 'TalentGetGo – 3rd Prize',
    image: './assets/images/cerificate/talent-get-go-3rd.png',
    flex: '800px',
  },
  {
    title: 'Provincial IT – 2nd Prize (11th Grade)',
    image: './assets/images/cerificate/hsg_11_tinh_2.png',
    flex: '720px',
  },
  {
    title: 'Provincial IT – 3rd Prize (12th Grade)',
    image: './assets/images/cerificate/hsg_12_tinh_3.png',
    flex: '700px',
  },
  {
    title: 'School IT – 3rd Prize (12th Grade)',
    image: './assets/images/cerificate/hsg_12_trg_3.png',
    flex: '700px',
  },
  {
    title: 'School IT – 3rd Prize (11th Grade)',
    image: './assets/images/cerificate/hsg_11_trg_3.png',
    flex: '700px',
  },
  {
    title: 'Provincial IT – Consolation (12th Grade)',
    image: './assets/images/cerificate/hsg_12_tinh_kk.png',
    flex: '700px',
  },
  {
    title: 'School IT – Consolation (11th Grade)',
    image: './assets/images/cerificate/hsg_11_trg_kk.png',
    flex: '770px',
  },
  {
    title: 'ITR Completion Certificate',
    image: './assets/images/cerificate/itr.png',
    flex: '700px',
  },
  {
    title: 'UIT Code Contest',
    image: './assets/images/cerificate/uit_code_contest.png',
    flex: '700px',
  },
  {
    title: 'VNG Code Challenge – Top 70',
    image: './assets/images/cerificate/vng-cer.jpg',
    flex: '320px',
  },
];

$(document).ready(() => {
  const $cerContainer = $('#certificate .certificate-container-gallery');

  let html = '';

  for (const cer in listCers) {
    const { title, image } = listCers[cer];

    html += `
    <div class="certificate-container-gallery-item">
        <img src="${image}" alt="${title}">
    </div>
    `;
  }

  $cerContainer.append(html);
});

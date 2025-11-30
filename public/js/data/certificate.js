export const listCers = [
  {
    title: '',
    image: './assets/images/cerificate/hsg_11_trg_3.png',
    flex: '700px',
  },
  {
    title: '',
    image: './assets/images/cerificate/hsg_11_trg_kk.png',
    flex: '770px',
  },
  {
    title: '',
    image: './assets/images/cerificate/hsg_11_tinh_2.png',
    flex: '720px',
  },
  {
    title: '',
    image: './assets/images/cerificate/hsg_12_tinh_3.png',
    flex: '700px',
  },
  {
    title: '',
    image: './assets/images/cerificate/hsg_12_tinh_kk.png',
    flex: '700px',
  },
  {
    title: '',
    image: './assets/images/cerificate/hsg_12_trg_3.png',
    flex: '700px',
  },
  {
    title: '',
    image: './assets/images/cerificate/itr.png',
    flex: '700px',
  },
  {
    title: '',
    image: './assets/images/cerificate/talent-get-go-3rd.png',
    flex: '800px',
  },
  {
    title: '',
    image: './assets/images/cerificate/talent-get-go.png',
    flex: '700px',
  },
  {
    title: '',
    image: './assets/images/cerificate/uit_code_contest.png',
    flex: '700px',
  },
  {
    title: '',
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

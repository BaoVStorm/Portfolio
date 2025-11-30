import { listCers } from '../data/certificate.js';

let $galleryContainer;
let $galleryItems;
let $indicator;

const defaultItemFlex = '1';

// ------- load -------
$(document).ready(() => {
  $galleryContainer = $('.certificate-container-gallery');
  $galleryItems = $galleryContainer.find('.certificate-container-gallery-item');
  $indicator = $('.certificate-container-indicator');

  updateGalleryItems();
  setEventSlider();
});

// ------- function -------

function updateGalleryItems() {
  $galleryItems.each(function (idx) {
    const $item = $(this);
    let flex;

    if ($item.data('isHovered')) {
      flex = `1 ${listCers[idx].flex}`;
      $item.addClass('active');
    } else {
      flex = defaultItemFlex;
      $item.removeClass('active');
    }

    $item.css('flex', flex);
  });
}

function setEventSlider() {
  // Hover item -> expand item theo listFlex
  $galleryItems.on('mouseenter', function () {
    const index = $(this).index();
    $galleryItems.each(function (i) {
      $(this).data('isHovered', i === index);
    });
    updateGalleryItems();
  });

  // di chuyển chuột để cập nhật indicator
  $galleryContainer.on('mousemove', function (e) {
    const offsetLeft = $(this).offset().left;
    const posX = e.clientX - offsetLeft;
    $indicator.css('left', `${posX}px`);
  });

  // rời khỏi gallery => reset all
  $galleryContainer.on('mouseenter', () => {
    $galleryContainer.addClass('hover');
  });

  // rời khỏi gallery => reset all
  $galleryContainer.on('mouseleave', () => {
    $galleryContainer.removeClass('hover');

    $galleryItems.each(function () {
      $(this).data('isHovered', false);
    });
    updateGalleryItems();
  });
}

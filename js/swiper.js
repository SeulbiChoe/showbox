var swiper = new Swiper(".popup .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10,
});

var topBanner = new Swiper(".top-sm-slider .swiper", {
  slidesPerView: 'auto',
  spaceBetween: 10,
});

var swiper2 = new Swiper(".mb-contents .txt-slide .swiper", {
  slidesPerView: 'auto',
});
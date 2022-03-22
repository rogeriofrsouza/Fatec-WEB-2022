const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,

  // Swiper 7
  watchOverflow: false,
  resizeObserver: false,
  watchSlidesProgress: true,

  breakpoints: {
    576: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

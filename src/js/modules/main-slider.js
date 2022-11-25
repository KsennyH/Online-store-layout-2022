module.exports = () => {
    new Swiper('.main-slider__telescopes', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
    });
}
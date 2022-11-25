module.exports = () => {
    const cardSwiper = new Swiper(".product-card__mini-slider", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".product-card__slider", {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: cardSwiper,
        },
    });
}
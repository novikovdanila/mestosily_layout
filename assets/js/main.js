const swiper = new Swiper('.js-classes-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,

    // If we need pagination
    pagination: {
        el: '.classes-slider__pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.classes-slider__button-next',
        prevEl: '.classes-slider__button-prev',
    },

    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }

});

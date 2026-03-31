// Инициализируем конкретный слайдер
const classesSwiper = new Swiper(".js-slider-classes", {
    direction: "horizontal",
    speed: 400,
    // loop: false, // Рекомендую false, если будет фильтрация
    slidesPerView: "auto",
    watchOverflow: true, // Скроет навигацию, если слайдов мало

    pagination: {
        el: ".swiper-pagination, .slider-classes__pagination",
        clickable: true,
        dynamicBullets: true,
        // dynamicMainBullets: 1,
    },

    navigation: {
        addIcons: false,
        nextEl: ".swiper-button-next, .slider-classes__button-next",
        prevEl: ".swiper-button-prev, .slider-classes__button-prev",
    },

    breakpoints: {
        320: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 20,
        },
        1024: {
            spaceBetween: 20,
        },
        1312: {
            spaceBetween: 24,
        }
    }
});
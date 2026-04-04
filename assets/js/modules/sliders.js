export function initSliders() {
    // Сладер классы
    const classesSwiper = new Swiper(".js-slider-classes", {
        direction: "horizontal",
        speed: 400,
        slidesPerView: "auto",
        watchOverflow: true,

        lazyPreloadPrevNext: 0,


        pagination: {
            el: ".slider-classes__pagination",
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            addIcons: false,
            nextEl: ".slider-classes__button-next",
            prevEl: ".slider-classes__button-prev",
        },

        breakpoints: {
            320: {
                spaceBetween: 8,
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

    // Сладер преподаватели
    const teachersSwiper = new Swiper(".js-slider-teachers", {
        direction: "horizontal",
        speed: 400,
        slidesPerView: "auto",
        watchOverflow: true,

        lazyPreloadPrevNext: 0,


        pagination: {
            el: ".slider-teachers__pagination",
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            addIcons: false,
            nextEl: ".slider-teachers__button-next",
            prevEl: ".slider-teachers__button-prev",
        },

        breakpoints: {
            320: {
                spaceBetween: 8,
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

    // Сладер отзывы
    const reviewsSwiper = new Swiper(".js-slider-reviews", {
        direction: "horizontal",
        speed: 400,
        slidesPerView: "auto",
        watchOverflow: true,

        lazyPreloadPrevNext: 0,


        pagination: {
            el: ".slider-reviews__pagination",
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            addIcons: false,
            nextEl: ".slider-reviews__button-next",
            prevEl: ".slider-reviews__button-prev",
        },

        breakpoints: {
            320: {
                spaceBetween: 8,
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

    return { classesSwiper, teachersSwiper, reviewsSwiper };
}

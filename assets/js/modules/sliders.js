export function initSliders() {
    // Сладер классы
    const classesSwiper = new Swiper(".js-slider-classes", {
        direction: "horizontal",
        speed: 400,
        slidesPerView: "auto",
        watchOverflow: true,

        lazyPreloadPrevNext: 2,


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

        lazyPreloadPrevNext: 2,


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

        lazyPreloadPrevNext: 2,


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

    // Сладер галерея
    const gallerySwiper = new Swiper(".js-slider-gallery", {
        direction: "horizontal",
        slidesPerView: 1,
        speed: 400,
        slidesPerView: "auto",
        centeredSlides: true,
        watchOverflow: true,
        loop: true,

        lazyPreloadPrevNext: 2,

        navigation: {
            addIcons: false,
            nextEl: ".gallery__button-next",
            prevEl: ".gallery__button-prev",
        },

        pagination: {
            el: ".gallery__pagination",
            clickable: true,
            dynamicBullets: true,
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

    return { classesSwiper, teachersSwiper, reviewsSwiper, gallerySwiper };
}

export const initLightbox = () => {
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.glightbox', // Класс для активации
            touchNavigation: true,  // Включает свайпы на мобильных
            loop: true,             // Циклический просмотр галереи
            closeButton: true,      // Показывать кнопку закрытия
            slideEffect: 'slide',    // Эффект смены слайдов ('slide' или 'fade')

            captions: false,        //отображение описания

            nextButton: true,             // Показывать стрелку "вперёд"
            prevButton: true,             // Показывать стрелку "назад"
            svg: {                        // SVG-иконки для кастомных кнопок
                close: '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1 1L15 15M15 1L1 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
                next: '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1L12 7M12 7L7 13M12 7H1" stroke="currentColor" stroke-width="2"/></svg>',
                prev: '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1L2 7M2 7L7 13M2 7H13" stroke="currentColor" stroke-width="2"/></svg>',
            }
        });


    } else {
        console.warn('GLightbox library is not loaded');
    }
};

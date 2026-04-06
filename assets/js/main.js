import { initHeader } from './modules/header.js';
import { initSliders } from './modules/sliders.js';
import { initFilter } from './modules/filter.js';
import { initLightbox } from './modules/glightbox-set.js';

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация хедера
    initHeader();

    // Инициализация слайдеров
    const { classesSwiper } = initSliders();

    // Инициализация фильтрации
    initFilter();

    // Связка фильтра со слайдером через кастомное событие
    if (classesSwiper) {
        const container = document.querySelector('.js-filter-container');
        if (container) {
            container.addEventListener('filter:changed', () => {
                classesSwiper.update();
                classesSwiper.slideTo(0);
            });
        }
    }

    // Инициализация лайтбокса
    initLightbox();
});

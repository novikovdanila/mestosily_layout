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
    initFilter(classesSwiper);

    // Инициализация лайтбокса
    initLightbox();
});

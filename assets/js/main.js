import { initSliders } from './modules/sliders.js';
import { initFilter } from './modules/filter.js';

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация слайдеров
    const classesSwiper = initSliders();

    // Инициализация фильтрации
    initFilter(classesSwiper);
});
export function initFilter(classesSwiper) {
    if (!classesSwiper) return;

    const filterButtons = document.querySelectorAll('.filter__btn');
    if (!filterButtons.length) return;

    // Сохраняем все слайды в массив при загрузке
    const allSlides = Array.from(document.querySelectorAll('.js-slider-classes .swiper-slide'));

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок и добавляем текущей
            filterButtons.forEach(btn => btn.classList.remove('filter__btn--active'));
            button.classList.add('filter__btn--active');

            const filterValue = button.getAttribute('data-filter');

            // Очищаем слайдер
            classesSwiper.removeAllSlides();

            // Фильтруем слайды
            const filteredSlides = filterValue === 'all' 
                ? allSlides 
                : allSlides.filter(slide => {
                    const dataCategory = slide.getAttribute('data-category');
                    if (!dataCategory) return false;
                    const categories = dataCategory.split(' ');
                    return categories.includes(filterValue);
                });

            // Добавляем отфильтрованные слайды обратно
            classesSwiper.appendSlide(filteredSlides);
            
            // Обновляем слайдер и возвращаемся к первому слайду
            classesSwiper.update();
            classesSwiper.slideTo(0);
        });
    });
}

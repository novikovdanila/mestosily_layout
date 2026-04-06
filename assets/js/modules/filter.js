/**
 * Универсальный модуль фильтрации
 * Работает через js- префиксы, не зависит от сторонних библиотек.
 */
export function initFilter() {
    const filterButtons = document.querySelectorAll('.js-filter-btn');
    const filterContainers = document.querySelectorAll('.js-filter-container');

    if (!filterButtons.length || !filterContainers.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.dataset.filter;

            // Переключаем активный класс у кнопок
            filterButtons.forEach(button => {
                button.classList.toggle('filter__btn--active', button === btn);
            });

            filterContainers.forEach(container => {
                const items = Array.from(container.children);

                // Эффект мигания для карточек
                items.forEach(item => {
                    if (item.classList.contains('js-filter-item')) {
                        item.classList.remove('is-blinking');
                        void item.offsetWidth; // Рефлоу для перезапуска анимации
                        item.classList.add('is-blinking');
                    }
                });

                // Удаляем класс после завершения анимации (0.3s)
                setTimeout(() => {
                    items.forEach(item => item.classList.remove('is-blinking'));
                }, 300);

                // Фильтруем элементы через display: none
                items.forEach(item => {
                    const categories = item.dataset.category ? item.dataset.category.split(' ') : [];

                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Генерируем событие для внешних подписчиков (например, Swiper)
                const filterChangedEvent = new CustomEvent('filter:changed', {
                    detail: { filter: filterValue },
                    bubbles: true,
                    cancelable: true
                });

                container.dispatchEvent(filterChangedEvent);
            });
        });
    });
}

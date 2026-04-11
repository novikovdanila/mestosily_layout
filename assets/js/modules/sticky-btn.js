/**
 * Универсальный модуль для «липких» элементов.
 * Показывает элемент (.js-btn-sticky), когда целевой элемент (.js-btn-target) уходит за верхнюю границу экрана.
 */
export function initStickyBtn() {
    const targetElement = document.querySelector('.js-btn-target');
    const stickyElement = document.querySelector('.js-btn-sticky');

    if (!targetElement || !stickyElement) return;

    const observerOptions = {
        root: null,
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Элемент считается "ушедшим", если он не пересекается с вьюпортом
            // и его верхняя граница отрицательна (он выше экрана)
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                stickyElement.classList.add('is-visible');
            } else {
                stickyElement.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    observer.observe(targetElement);
}

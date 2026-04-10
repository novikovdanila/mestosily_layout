/**
 * Модуль для работы липкой навигации на странице цен.
 * Реализует Scroll Spy: подсвечивает активный пункт меню при скролле.
 */
export function initStickyNav() {
    const navLinks = document.querySelectorAll('.js-prices-nav-link');
    const sections = document.querySelectorAll('.js-prices-section');

    if (!navLinks.length || !sections.length) return;

    // Класс активного состояния
    const activeClass = 'filter__btn--active';

    // Опции для IntersectionObserver
    // rootMargin: 'верх право низ лево'
    // -160px сверху учитывает высоту хедера (~80px) + высоту самой навигации (~70px) + небольшой запас
    const options = {
        root: null,
        rootMargin: '-160px 0px -60% 0px',
        threshold: 0
    };

    // Функция для прокрутки навигации к активному пункту
    const scrollToActiveLink = (link) => {
        if (!link) return;
        
        // Используем scrollIntoView для центрирования активной кнопки в горизонтальном списке
        link.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle(activeClass, isActive);
                    
                    if (isActive) {
                        scrollToActiveLink(link);
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Обработка клика
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove(activeClass));
            link.classList.add(activeClass);
            scrollToActiveLink(link);
        });
    });
}

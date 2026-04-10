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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Снимаем активность со всех ссылок
                navLinks.forEach(link => {
                    link.classList.toggle(activeClass, link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Обработка клика (плавный скролл уже есть в CSS, но на всякий случай 
    // если активный класс нужно переключить мгновенно не дожидаясь скролла)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Мы не отменяем дефолтное поведение ссылки-якоря, 
            // так как scroll-behavior: smooth в CSS обеспечит плавность.
            
            // Но можно принудительно поставить активный класс
            navLinks.forEach(l => l.classList.remove(activeClass));
            link.classList.add(activeClass);
        });
    });
}

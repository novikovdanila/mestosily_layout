export function initHeader() {
    const burgerBtn = document.querySelector('.menu__burger-btn');
    const menuWrapper = document.querySelector('.menu__wrapper');
    const langSwitcher = document.querySelector('.header__lang');
    const langBtn = document.querySelector('.header__lang-btn');
    const body = document.body;

    if (burgerBtn && menuWrapper) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.add('is-clicked');
            burgerBtn.classList.toggle('active');
            menuWrapper.classList.toggle('is-open');
            body.classList.toggle('lock');
        });

        // Закрытие меню при клике по ссылке
        const menuLinks = menuWrapper.querySelectorAll('.menu__link');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuWrapper.classList.contains('is-open')) {
                    burgerBtn.classList.remove('active');
                    menuWrapper.classList.remove('is-open');
                    body.classList.remove('lock');
                }
            });
        });
    }

    // Переключение языка на мобильных устройствах (по клику)
    if (langSwitcher && langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            langSwitcher.classList.toggle('is-active');
        });

        // Закрытие при выборе языка
        const langLinks = langSwitcher.querySelectorAll('.header__lang-link');
        langLinks.forEach(link => {
            link.addEventListener('click', () => {
                langSwitcher.classList.remove('is-active');
            });
        });
    }

    // Закрытие при клике вне элементов
    document.addEventListener('click', (e) => {
        // Для бургера
        if (menuWrapper && menuWrapper.classList.contains('is-open') &&
            !menuWrapper.contains(e.target) &&
            !burgerBtn.contains(e.target)) {
            burgerBtn.classList.remove('active');
            menuWrapper.classList.remove('is-open');
            body.classList.remove('lock');
        }

        // Для переключателя языка
        if (langSwitcher && langSwitcher.classList.contains('is-active') &&
            !langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('is-active');
        }
    });


    // Header Compact
    const header = document.querySelector('.header');
    const anchor = document.querySelector('#scroll-anchor');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Если якорь НЕ виден (ушел выше экрана), добавляем класс
            if (!entry.isIntersecting) {
                header.classList.add('header--compact');
            } else {
                // Если якорь снова в зоне видимости, убираем класс
                header.classList.remove('header--compact');
            }
        });
    }, {
        threshold: 0 // Срабатывает сразу при пересечении границы в 1 пиксель
    });

    observer.observe(anchor);
}

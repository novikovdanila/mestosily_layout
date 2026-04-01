export function initHeader() {
    const burgerBtn = document.querySelector('.menu__burger-btn');
    const menuWrapper = document.querySelector('.menu__wrapper');
    const body = document.body;

    if (!burgerBtn || !menuWrapper) return;

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

    // Закрытие при клике вне меню (опционально, но рекомендуется)
    document.addEventListener('click', (e) => {
        if (menuWrapper.classList.contains('is-open') &&
            !menuWrapper.contains(e.target) &&
            !burgerBtn.contains(e.target)) {
            burgerBtn.classList.remove('active');
            menuWrapper.classList.remove('is-open');
            body.classList.remove('lock');
        }
    });
}

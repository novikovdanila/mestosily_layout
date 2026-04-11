export function initVideoModal() {
    const videoBtns = document.querySelectorAll('.js-video-btn');
    const modal = document.querySelector('.modal-video');

    if (!modal || !videoBtns.length) return;

    const modalContent = modal.querySelector('.modal__content');
    const modalClose = modal.querySelector('.modal__close');

    // Конвертируем YouTube Shorts / обычные ссылки в embed-URL
    function getEmbedUrl(url) {
        // YouTube Shorts: https://www.youtube.com/shorts/VIDEO_ID
        const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
        if (shortsMatch) {
            return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1&rel=0`;
        }
        // Обычный YouTube: https://youtu.be/ID или https://youtube.com/watch?v=ID
        const watchMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);
        if (watchMatch) {
            return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&rel=0`;
        }
        return url;
    }

    function openModal(videoUrl) {
        const embedUrl = getEmbedUrl(videoUrl);
        modalContent.innerHTML = `
            <iframe
                src="${embedUrl}"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen
            ></iframe>
        `;
        modal.classList.add('is-open');
        document.body.classList.add('lock');
    }

    function closeModal() {
        modal.classList.remove('is-open');
        document.body.classList.remove('lock');
        // Останавливаем видео, удаляя iframe
        modalContent.innerHTML = '';
    }

    // Открытие по клику на кнопку
    videoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const videoUrl = btn.getAttribute('href');
            if (videoUrl) openModal(videoUrl);
        });
    });

    // Закрытие по кнопке
    modalClose.addEventListener('click', closeModal);

    // Закрытие по клику на оверлей
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
}

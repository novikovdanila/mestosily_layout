export const initFaq = () => {
    const faqBtns = document.querySelectorAll('.faq__spoiler-btn');

    if (faqBtns.length === 0) return;

    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.faq__spoiler');
            const isActive = parent.classList.contains('is-active-faq');

            // Close others (exclusive accordion)
            document.querySelectorAll('.faq__spoiler').forEach(spoiler => {
                if (spoiler !== parent) {
                    spoiler.classList.remove('is-active-faq');
                }
            });

            // Toggle current
            parent.classList.toggle('is-active-faq', !isActive);
        });
    });
};

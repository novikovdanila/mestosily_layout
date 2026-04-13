/**
 * Dynamic DOM Transfer Module
 *
 * Перемещает элементы с атрибутом [data-transfer] в целевой контейнер
 * при достижении брекпоинта (data-breakpoint, default: 768).
 * При возврате — восстанавливает элемент на исходную позицию.
 *
 * Атрибуты:
 *   data-transfer="<CSS-селектор>"   — куда переместить
 *   data-breakpoint="<число>"        — ширина в px (default: 768)
 */

export function initDomTransfer() {
    const items = document.querySelectorAll('[data-transfer]');
    if (!items.length) return;

    // Строим карту для каждого элемента: сохраняем исходную позицию
    const transfers = Array.from(items).map((el) => {
        const targetSelector = el.dataset.transfer;
        const breakpoint = parseInt(el.dataset.breakpoint, 10) || 768;
        const target = document.querySelector(targetSelector);

        if (!target) {
            console.warn(`[dom-transfer] Target not found: "${targetSelector}"`);
            return null;
        }

        return {
            el,
            target,
            breakpoint,
            originalParent: el.parentElement,
            // Запоминаем следующий сиблинг для точного восстановления позиции
            originalNextSibling: el.nextSibling,
            isMoved: false,
        };
    }).filter(Boolean);

    if (!transfers.length) return;

    /**
     * Выполняет перенос или восстановление для одного элемента
     */
    function applyTransfer(item, isMobile) {
        if (isMobile && !item.isMoved) {
            item.target.appendChild(item.el);
            item.isMoved = true;
        } else if (!isMobile && item.isMoved) {
            // Восстанавливаем на исходную позицию
            if (item.originalNextSibling && item.originalParent.contains(item.originalNextSibling)) {
                item.originalParent.insertBefore(item.el, item.originalNextSibling);
            } else {
                item.originalParent.appendChild(item.el);
            }
            item.isMoved = false;
        }
    }

    // Группируем по брекпоинту, чтобы создать минимум matchMedia-листенеров
    const breakpointGroups = transfers.reduce((acc, item) => {
        const bp = item.breakpoint;
        if (!acc[bp]) acc[bp] = [];
        acc[bp].push(item);
        return acc;
    }, {});

    Object.entries(breakpointGroups).forEach(([bp, group]) => {
        const mq = window.matchMedia(`(max-width: ${bp}px)`);

        const handler = (e) => {
            group.forEach((item) => applyTransfer(item, e.matches));
        };

        // Первоначальная проверка
        handler(mq);

        // Слушаем изменения
        if (mq.addEventListener) {
            mq.addEventListener('change', handler);
        } else {
            // Fallback для Safari < 14
            mq.addListener(handler);
        }
    });
}

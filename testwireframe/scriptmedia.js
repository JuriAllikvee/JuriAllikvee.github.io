document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonials-container");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    // Находим ширину одной карточки (testimonial):
    // 1) первую карточку
    let card = container.querySelector(".testimonial");
    // 2) её computed-стили (чтобы учитывать margin)
    let style = card ? window.getComputedStyle(card) : null;
    let singleCardWidth = card 
        ? card.offsetWidth 
            + parseFloat(style.marginLeft) 
            + parseFloat(style.marginRight) 
        : 0;

    // Функция обновления состояния стрелок
    const updateArrowsState = () => {
        // Если проскроллили влево до нуля
        if (container.scrollLeft <= 0) {
            leftArrow.style.opacity = "0.5";
            leftArrow.style.pointerEvents = "none";
        } else {
            leftArrow.style.opacity = "1";
            leftArrow.style.pointerEvents = "all";
        }

        // Если проскроллили вправо до конца (или чуть дальше из-за округления)
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
            rightArrow.style.opacity = "0.5";
            rightArrow.style.pointerEvents = "none";
        } else {
            rightArrow.style.opacity = "1";
            rightArrow.style.pointerEvents = "all";
        }
    };

    // Обработчик для левой стрелки
    leftArrow.addEventListener("click", () => {
        container.scrollBy({ 
            left: -singleCardWidth, 
            behavior: "smooth" 
        });
        setTimeout(updateArrowsState, 300);
    });

    // Обработчик для правой стрелки
    rightArrow.addEventListener("click", () => {
        // Прокручиваем вправо ровно на ширину одной карточки
        container.scrollBy({ 
            left: singleCardWidth, 
            behavior: "smooth"
        });
        // Через 300 мс после начала прокрутки обновим состояние
        setTimeout(updateArrowsState, 300);
    });

    // Первоначальная проверка
    updateArrowsState();

    // При изменении размера окна пересчитываем ширину карточки
    window.addEventListener("resize", () => {
        card = container.querySelector(".testimonial");
        if (card) {
            style = window.getComputedStyle(card);
            singleCardWidth = card.offsetWidth 
                + parseFloat(style.marginLeft) 
                + parseFloat(style.marginRight);
        }
        updateArrowsState();
    });
});
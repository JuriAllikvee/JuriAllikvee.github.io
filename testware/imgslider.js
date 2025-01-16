document.addEventListener('DOMContentLoaded', () => {
    // Найдём элементы в DOM
    const carouselContainer = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0; // Номер текущего слайда

    // Функция обновления состояния карусели
    function updateCarousel() {
        // Если зашли дальше последнего слайда — вернёмся к началу
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        // Сдвигаем контейнер на ширину текущего слайда (в процентах)
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Обновляем вид «точек»
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Запускаем автопереключение каждые 3 секунды
    let slideInterval = setInterval(() => {
        currentIndex++;
        updateCarousel();
    }, 3000);

    // Добавим переключение по «точкам»
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            // Сбросим интервал, чтобы пользователь мог сам переключить, а после этого таймер не сбился.
            clearInterval(slideInterval);
            slideInterval = setInterval(() => {
                currentIndex++;
                updateCarousel();
            }, 3000);
        });
    });

    // При загрузке страницы сразу установим карусель на 1-й слайд (index = 0)
    updateCarousel();
});
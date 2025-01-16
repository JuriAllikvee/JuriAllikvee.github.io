let currentCarouselIndex = 0;
const carouselSlides = document.querySelectorAll('.features-carousel .carousel-slide');
const totalSlides = carouselSlides.length;
const carouselInterval = 5000; // Интервал смены слайдов в миллисекундах (5 секунд)
let carouselTimer;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextCarousel() {
    currentCarouselIndex = (currentCarouselIndex + 1) % totalSlides;
    showSlide(currentCarouselIndex);
}

function prevCarousel() {
    currentCarouselIndex = (currentCarouselIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentCarouselIndex);
}

function startCarousel() {
    carouselTimer = setInterval(nextCarousel, carouselInterval);
}

function stopCarousel() {
    clearInterval(carouselTimer);
}

// Инициализация карусели
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentCarouselIndex);
    startCarousel();

    // Останавливаем карусель при наведении мыши и запускаем снова при уходе
    const carouselContainer = document.querySelector('.features-carousel .carousel-container');
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
});

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides .review').length;

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}
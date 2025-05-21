const slider = document.getElementById('product-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cards = document.querySelectorAll('.product-card');
const cardWidth = 320; // Card width (300px) + gap (20px)
let currentIndex = 0;

// Calculate number of cards visible based on container width
function getVisibleCards() {
    const containerWidth = document.querySelector('.slider-container').offsetWidth;
    return Math.floor(containerWidth / cardWidth);
}

// Calculate maximum index
function getMaxIndex() {
    return cards.length - getVisibleCards();
}

// Move to specific index
function moveToIndex(index) {
    // Ensure index is within bounds
    currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
    const translateX = currentIndex * cardWidth;
    slider.style.transform = `translateX(-${translateX}px)`;
}

// Previous button click
prevBtn.addEventListener('click', () => {
    moveToIndex(currentIndex - 1);
});

// Next button click
nextBtn.addEventListener('click', () => {
    moveToIndex(currentIndex + 1);
});

// Update slider on window resize
window.addEventListener('resize', () => {
    // If current position would be out of bounds after resize, adjust it
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) {
        moveToIndex(maxIndex);
    }
});


// Initialize slider
moveToIndex(0);


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('header-nav');

// При клике на гамбургер переключаем класс .active на меню
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
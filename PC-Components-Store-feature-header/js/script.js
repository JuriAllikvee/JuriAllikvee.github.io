document.addEventListener('DOMContentLoaded', () => {
    // --- гамбургер ---
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('header-nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- переключатель категорий (если есть) ---
    const catToggle = document.querySelector('.category-toggle');
    const catNav    = document.querySelector('.category-nav');
    if (catToggle && catNav) {
        catToggle.addEventListener('click', () => {
            catNav.classList.toggle('active');
        });
    }
});


// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.product-slider');
    const slides = document.querySelectorAll('.product-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevArrow = document.querySelector('.slider-arrow.prev');
    const nextArrow = document.querySelector('.slider-arrow.next');

    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;

    // Initialize the slider
    function initSlider() {
        // Set initial position
        updateSlider();

        // Start auto rotation
        startAutoRotation();

        // Add event listeners
        prevArrow.addEventListener('click', prevSlide);
        nextArrow.addEventListener('click', nextSlide);

        // Add dot click events
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-index'));
                goToSlide(slideIndex);
            });
        });

        // Pause auto-rotation on hover
        slider.addEventListener('mouseenter', stopAutoRotation);
        slider.addEventListener('mouseleave', startAutoRotation);
    }

    // Update slider position and active dot
    function updateSlider() {
        // Update slider position
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
        resetAutoRotation();
    }

    // Go to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
        resetAutoRotation();
    }

    // Go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
        resetAutoRotation();
    }

    // Start auto rotation
    function startAutoRotation() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop auto rotation
    function stopAutoRotation() {
        clearInterval(slideInterval);
    }

    // Reset auto rotation (after manual navigation)
    function resetAutoRotation() {
        stopAutoRotation();
        startAutoRotation();
    }

    // Initialize the slider
    initSlider();
});

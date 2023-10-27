let slideIndex = 0; // Empezar en la primera diapositiva

const slides = document.querySelectorAll('.slider-slide');
const prevArrow = document.querySelector('.slider-prev');
const nextArrow = document.querySelector('.slider-next');

function showSlide(n) {
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slides[slideIndex].style.opacity = 1;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

nextArrow.addEventListener('click', nextSlide);
prevArrow.addEventListener('click', prevSlide);

showSlide(slideIndex);

// Cambiar automáticamente de slide cada 5 segundos
setInterval(nextSlide, 5000);

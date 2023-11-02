var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var interval;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateIndicators();
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function createIndicators() {
    var indicatorsContainer = document.querySelector('.carousel-indicators');

    for (var i = 0; i < 0; i++) {
        var indicator = document.createElement('button');
        if (i === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }

        indicator.addEventListener('click', function() {
            var slideIndex = parseInt(this.getAttribute('data-bs-slide-to'));
            showSlide(slideIndex);
        });

        indicatorsContainer.appendChild(indicator);
    }
}

function startSlideInterval() {
    interval = setInterval(function() {
        changeSlide(1);
    }, 4000); // Cambia la diapositiva cada 5 segundos (5000 milisegundos)
}

function updateIndicators() {
    var indicators = document.querySelectorAll('.carousel-indicators button');
    indicators.forEach(function(indicator, index) {
        if (index === currentSlide) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        } else {
            indicator.classList.remove('active');
            indicator.removeAttribute('aria-current');
        }
    });
}

function initializeCarousel() {
    createIndicators();
    showSlide(currentSlide);
    startSlideInterval(); // Comienza el cambio automático de diapositivas al cargar la página
}

initializeCarousel();

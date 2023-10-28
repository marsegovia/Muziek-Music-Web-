var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    changeSlide(1);
});

showSlide(currentSlide);

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    changeSlide(1);
});

showSlide(currentSlide);

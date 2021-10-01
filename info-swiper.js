
const swiper = new Swiper('.review-swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        1025: {
            slidesPerView: 3,
        }
    }
});

const skiper = new Swiper('.info-slider', {
    spaceBetween: 50,
    allowTouchMove: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    slidesPerView: 1,
});

let sliderCounter = 1;
let allSlides = document.body.querySelectorAll('.slide');
let sliderClick = document.body.querySelector('.more-info-slider').addEventListener('transitionend', checkSlide);
const nextSlide = document.body.querySelector('.swiper-button-next');
const prevSlide = document.body.querySelector('.swiper-button-prev');

function checkSlide() {
    if (allSlides[0].classList.contains('swiper-slide-active')) {
        sliderCounter = 1;
        document.body.querySelector('.number-of-slide').innerHTML = `${sliderCounter}`;
        document.body.querySelector('.text-of-slide').innerHTML = `${slideTitles[sliderCounter - 1]}`
    } else if (allSlides[1].classList.contains('swiper-slide-active')) {
        sliderCounter = 2;
        document.body.querySelector('.number-of-slide').innerHTML = `${sliderCounter}`;
        document.body.querySelector('.text-of-slide').innerHTML = `${slideTitles[sliderCounter - 1]}`
    } else if (allSlides[2].classList.contains('swiper-slide-active')) {
        sliderCounter = 3;
        document.body.querySelector('.number-of-slide').innerHTML = `${sliderCounter}`;
        document.body.querySelector('.text-of-slide').innerHTML = `${slideTitles[sliderCounter - 1]}`
    }
}



// Массив слайдов, которые нужно менять
const slideTitles = ['Изучаете модули в нашей системе', 'Слайд номер 2', 'Слайд номер 3']


document.body.querySelector('.text-of-slide').innerHTML = `${slideTitles[sliderCounter - 1]}`

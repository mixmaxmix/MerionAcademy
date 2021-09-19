const swiper = new Swiper('.review-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,

    slidesPerView: 3,
    // If we need pagination
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
    // Optional parameters
    // direction: 'horizontal',
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

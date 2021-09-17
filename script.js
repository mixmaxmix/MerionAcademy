const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.menu-opened')
let isOpened = false;


burger.addEventListener('click', function() {
    if (isOpened == false) {
        menu.style.display = "flex";
        document.querySelector('header').style.background = "var(--purple)";
        document.querySelector('.header-logo').style.opacity = "0";
        burger.style.background = "url(./img/burgerClose.svg) center center / cover"
        burger.style.width = "32px"
        burger.style.height = "32px"
        isOpened = true;
    } else {
        menu.style.display = "none";
        document.querySelector('header').style.background = "var(--white)";
        document.querySelector('.header-logo').style.opacity = "1";
        burger.style.background = "url(./img/burger.svg)"
        burger.style.width = "18px"
        burger.style.height = "12px"
        isOpened = false;
    }
});

document.querySelectorAll('.menu-link').forEach(btn => btn.addEventListener('click', function() {
    if (isOpened == true) {
        menu.style.display = "none";
        document.querySelector('header').style.background = "var(--white)";
        document.querySelector('.header-logo').style.opacity = "1";
        burger.style.background = "url(./img/burger.svg)"
        burger.style.width = "18px"
        burger.style.height = "12px"
        document.querySelector('.menu-opened').style.display = 'none';
        isOpened = false;
    } else {
        menu.style.display = "flex";
        document.querySelector('header').style.background = "var(--purple)";
        document.querySelector('.header-logo').style.opacity = "0";
        burger.style.background = "url(./img/burgerClose.svg) center center / cover"
        burger.style.width = "32px"
        burger.style.height = "32px"
        document.querySelector('.menu-opened').style.display = 'flex';
        isOpened = true;
    }
}));

document.querySelectorAll('.course-button').forEach(btn => btn.addEventListener('click', e => {
    const filterId = btn.id;

    window.location.href = `/courses.html?filter=${filterId}`
}))

document.querySelectorAll('.directions-cards .card').forEach(btn => btn.addEventListener('click', e => {
    const filterId = btn.id;

    window.location.href = `/courses.html?filter=${filterId}`
}))

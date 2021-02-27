const offerSlider = new Swiper('.offer__slider', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.offer__btn--next',
        prevEl: '.offer__btn--prev',
    },
});

document.querySelector(".current-year").innerHTML = new Date().getFullYear()
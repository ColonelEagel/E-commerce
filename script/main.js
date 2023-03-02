// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    zoom: true,
    keyboard:
    {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel:
    {
        invert: true,
    },
    // autoplay images
    autoplay:
    {
        delay: 2000,
    },
    // loop to slide the image after end
    loop: true,
});
$(document).ready(function() {
    $(window).scroll(function() {

        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 0) {
            $('#Nav').addClass('navbar-fixed-top');
        }

        if ($(window).scrollTop() < 1) {
            $('#Nav').removeClass('navbar-fixed-top');
        }
    });
});



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000, //slide deyishim sureti
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// var slider = tns({
//     container: '.my-slider',
//     items: 3,
//     slideBy: 'page',
//     autoplay: true
// });
// // var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     loop: true,
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 20,
//         stretch: 0,
//         depth: 700,
//         modifier: 1,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
// });
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     // loop: flase,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });
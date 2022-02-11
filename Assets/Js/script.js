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
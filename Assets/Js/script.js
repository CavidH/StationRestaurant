// $(document).ready(function() {
//     $(window).scroll(function() {
//
//         console.log($(window).scrollTop());
//
//         if ($(window).scrollTop() > 0) {
//             $('#Nav').addClass('navbar-fixed-top');
//         }
//
//         if ($(window).scrollTop() < 1) {
//             $('#Nav').removeClass('navbar-fixed-top');
//         }
//     });
// });


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


// dish owl carousel slider js
// var owl = $('.dish_carousel').owlCarousel({
//     loop: true,
//     margin: 15,
//     dots: false,
//     autoplay: true,
//     navText: [
//         '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
//         '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
//     ],
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 1,
//             margin: 0
//         },
//         800: {
//             items: 3
//         },
//         576: {
//             items: 2
//         },
//         991: {
//             items: 4
//         }
//     }
// })
//
/*
var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    items: 5,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true

});
*/
//
// $(document).on('click', '.owl-item>div', function() {
//     // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
//     var $speed = 300;  // in ms
//     $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
// });
//

$(function(){
    $('.mhn-slide').owlCarousel({
        nav:true,
        //loop:true,
        slideBy:'page',
        loop: true,
        items: 5,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        rewind:false,
        responsive:{
            0:{items:1},
            480:{items:2},
            600:{items:3},
            1000:{items:4}
        },
        smartSpeed:70,
        onInitialized:function(e){
            $(e.target).find('img').each(function(){
                if(this.complete){
                    $(this).closest('.mhn-inner').find('.loader-circle').hide();
                    $(this).closest('.mhn-inner').find('.mhn-img').css('background-image','url('+$(e.target).attr('src')+')');
                }else{
                    $(this).bind('load',function(e){
                        $(e.target).closest('.mhn-inner').find('.loader-circle').hide();
                        $(e.target).closest('.mhn-inner').find('.mhn-img').css('background-image','url('+$(e.target).attr('src')+')');
                    });
                }
            });
        },
        navText:['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>','<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>']
    });
});



lightGallery(document.querySelector(".galery"))



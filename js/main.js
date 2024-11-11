$(document).ready(function(e) {

    /*-----------------
   HAMBURGER MENU
-----------------*/
    $(".hamburger-btn").on("click", function (e) {
        e.preventDefault();
        $(".hamburger-menu, .overlay").addClass("active");
        $('body').addClass('disable');
    });
    $(".hamburger-close, .overlay").on("click", function () {
        $(".hamburger-menu, .overlay").removeClass("active");
        $('body').removeClass('disable');
    });
    /*-----------------
        HAMBURGER MENU
    -----------------*/


    var swiper = new Swiper(".useful-swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 600, 
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20
      },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },

    }
    });

    var nav_swiper = new Swiper(".sub-navigation .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 32,
        freeMode: true,
        watchOverflow: true,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev",
        },
    });
})


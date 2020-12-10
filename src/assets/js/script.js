$(document).ready(function() {
    $("#owl-carousel").owlCarousel({
           items : 1, 
           itemsDesktop : false,
           itemsDesktopSmall : false,
           itemsTablet: false,
           itemsMobile : false,
           margin: 0,
           loop: true,
           dots: false,
           autoplay:true,
           autoplayTimeout:5000 
         });
 
         $("#owl-carousel-section").owlCarousel({
           items : 1, 
           itemsDesktop : false,
           itemsDesktopSmall : false,
           itemsTablet: false,
           itemsMobile : false,
           margin: 5,
           loop: true,
           dots: true,
           autoplay:true,
           autoplayTimeout:5000 
         });
 
         $(".owl-carousel").owlCarousel();

       });

       
var mySwiper;
$(document).ready(function () {
    //initialize swiper when document ready
    mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        speed: 1000,
        loop: false,
        // If we need pagination
        pagination: {
          el: '.swiper-container__pagination',
          renderBullet: function (index, className) {
             return '<span class="' + className + '"> <p class="pagination-text">' + (index + 2010) + '</p></span>';
          }
        },
        mousewheel: {
            forceToAxis: true,
            releaseOnEdges: true,
          },

        
        touchReleaseOnEdges: true
          
    });
    mySwiper.mousewheel.disable();
    mySwiper.touchMove.disable();
});

$(window).scroll(function() {
    var elementTop = $(".swiper-slide-active .slide-content").offset().top;
    var elementBottom = elementTop + $(".swiper-slide-active .slide-content").outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + screen.height;
   if(elementBottom <= viewportBottom && elementTop >= viewportTop)
   {
        mySwiper.mousewheel.enable();
        mySwiper.touchMove.enable();
   }
    else
    {
         mySwiper.mousewheel.disable();
         mySwiper.touchMove.disable();
    }
      
});

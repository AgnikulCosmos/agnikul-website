var mySwiper,advSwiper,partSwiper,busiSwiper;
$(document).ready(function () {
    //initialize swiper when document ready
    mySwiper = new Swiper ('.timeline-swiper', {
        direction: 'vertical',
        speed: 300,
        loop: false,
        // If we need pagination
        pagination: {
          el: '.timeline__swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
             return '<span class="' + className + '"> <p class="pagination-text">' + (index + 2010) + '</p></span>';
          }
        },
        mousewheel: {
            forceToAxis: true,
            releaseOnEdges: true,
            sensitivity: 1000
          },

        
        touchReleaseOnEdges: true
          
    });
    mySwiper.mousewheel.disable();
    mySwiper.allowTouchMove = false;




    advSwiper = new Swiper('.advisor-swiper',{
      direction: 'horizontal',
      autoHeight: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      simulateTouch: false,
      pagination: {
        el: '.advisor__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if((index >= 1 && index <= this.slides.length - 2) || 1200 > screen.width)
          return '<span class="' + className + '"></span>';
          else
            return '<span  class="' + className + ' hidden-bullet"></span>';
       }
      },
      
        on: {
            slideChange : function() {
              if(screen.width > 1200)
              {
              if(this.activeIndex == 1)
              {
                  this.allowSlidePrev = false;
              }
              else
              {
                this.allowSlidePrev = true;
              }
               if(this.activeIndex == this.slides.length - 2)
               {
                  this.allowSlideNext = false;
               }
              else
              {
              this.allowSlideNext = true;
              }
            }
              
            }
        }
      
    });
    if(screen.width > 1200)
    advSwiper.slideNext();
    
    partSwiper = new Swiper('.partner-swiper',{
      direction: 'horizontal',
      slidesPerView: 'auto',
      autoHeight: true,
      centeredSlides: true,
      keyboard: {
        enabled: true,
      },
      simulateTouch: false,
      pagination: {
        el: '.partner__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if((index >= 1 && index <= this.slides.length - 2) || 1200 > screen.width)
          return '<span class="' + className + '"></span>';
          else
            return '<span  class="' + className + ' hidden-bullet"></span>';
       }
      },
      
        on: {
            slideChange : function() {
              if(screen.width > 1200)
              {
              if(this.activeIndex == 1)
              {
                  this.allowSlidePrev = false;
              }
              else
              {
                this.allowSlidePrev = true;
              }
               if(this.activeIndex == this.slides.length - 2)
               {
                  this.allowSlideNext = false;
               }
              else
              {
              this.allowSlideNext = true;
              }
            }
              
            }
        }
      
    });
    if(screen.width > 1200)
    partSwiper.slideNext();
    

    busiSwiper = new Swiper(
      ".business-swiper",
      {
          direction: 'horizontal',
          loop: true,
          speed: 1000,
          effect: "slide",
          autoHeight: true,
          pagination: {
            clickable: true,
            el: '.business__swiper-pagination'
          }
      }
    );
    
});

$(window).scroll(function() {
    var elementTop = $(".swiper-slide-active .slide-content").offset().top;
    var elementBottom = elementTop + $(".swiper-slide-active .slide-content").outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + screen.height;
   if(elementBottom <= viewportBottom && elementTop >= viewportTop)
   {
        mySwiper.mousewheel.enable();
        mySwiper.allowTouchMove = true;
   }
    else
    {
         mySwiper.mousewheel.disable();
         mySwiper.allowTouchMove = false;
    }
      
});

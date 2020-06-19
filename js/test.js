var advSwiper;
$(document).ready(function(){
    advSwiper = new Swiper('.advisor-swiper',{
        direction: 'horizontal',
        slidesPerView: 3,
        simulateTouch: false,
        pagination: {
          el: '.advisor__swiper-pagination',
        },
        navigation: {
            nextEl: '.advisor__swiper-button-next',
            prevEl: '.advisor__swiper-button-prev',
          },
  
  
      });
});
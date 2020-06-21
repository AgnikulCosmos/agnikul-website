
var locationSwiper;


var locationData = {
  "chennai" : [0,1,2,3,4,5],
  "beijing" : [10,11,12,13,14,15],
  "kolkata" : [20,21,22,33,34,35],
  "ahmedabad" : [40,41,42,43,44,45],
  "rajastan" : [525,523,445,441,443,438,437,439,520,446,442,444,440],
  "moscow" : [60,61,62,63,64,65],
} 


$(document).ready( function() {

  locationSwiper = new Swiper(
      ".location-swiper",
      {
          direction: "vertical",
          slidesPerView: 'auto',
          pagination: {
            el : ".location__swiper-pagination",
            clickable : true,
          },
          keyboard : true,
          mousewheel : {
            invert : false,
          }
      }
  );

  $(".location__slide-content").each(function(){
    $(this).hover(
    function() {
        var key = $(this).attr('id');
        //console.log(locationData[key]);
        var dots = document.getElementsByTagName("circle");
        for(var i=0;i<dots.length;i++)
        {
             if(locationData[key].indexOf(i) != -1)
                dots[i].style.fill = "#4d8c52";
        }
    },
    function() {
      var key = $(this).attr('id');
      var dots = document.getElementsByTagName("circle");
      for(var i=0;i<dots.length;i++)
      {
           if(locationData[key].indexOf(i) != -1)
              dots[i].style.fill ="rgba(0, 0, 0, 0.3)";
      }
    }
    );
  });

});





var selected = [];

$(document).ready(
    function() {
        $("circle").each(function(){
            $(this).click(function(){

                    var dots = document.getElementsByTagName("circle");
                    var ind = -1;
                    for(var i=0;i<dots.length && ind == -1;i++)
                    {
                        if(dots[i].id == $(this).attr('id'))
                            ind = i;
                       
                    }
                    selected.push(ind);
                    dots[ind].style.fill = "#4d8c52";
                    var result = document.getElementById("result");
                    result.innerHTML = "Selected Dots: " + selected.toString(); 
                    console.log(selected);
            });
        });

});
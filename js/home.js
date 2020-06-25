
var diff = 0.25;
var upId,downId;

function setTransform(value){
    $(".right-within").css("transform", "translateY(" + value + "%)");
}

function getTransform(){
    var value = $(".right-within").css("transform");
    value = value.split(",")[5];
    value = value.split(")")[0];
    
    var height = $(".right-within").css("height");
    height = height.split("p")[0];
    height = Number.parseFloat(height);
    value = Number.parseFloat(value);
    value = (value / height)*100;
    return value;

}



function moveUp() {

    var curr = getTransform();
    if(curr > -62)
    {
        curr -= diff;
        setTransform(curr);
    }
    upId = requestAnimationFrame(moveUp);
}


function moveDown() {

    var curr = getTransform();
    if(curr < 0)
    {
        curr += diff;
        setTransform(curr);
    }
    downId = requestAnimationFrame(moveDown);
}


$(document).ready(function(){


    $(".right-image").hover(
        function(){
            cancelAnimationFrame(downId);
            upId = requestAnimationFrame(moveUp);
        },
        function(){
            cancelAnimationFrame(upId);
            downId = requestAnimationFrame(moveDown);
        }
    );
});
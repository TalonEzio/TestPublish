var size = document.getElementsByClassName("slider")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("slider-transition")[0];
var Img = ChuyenSlide.getElementsByClassName("slider-transition-img");
var Max = size * Img.length;
Max -= size;

var chuyen=0;
function Next(){
    if(chuyen < Max) chuyen += size;
    else chuyen = 0;
    ChuyenSlide.style.marginLeft = "-" + chuyen + "px";
}

function Back() {   
    if(chuyen == 0) chuyen = Max;
    else chuyen -= size;
    ChuyenSlide.style.marginLeft = "-" + chuyen + "px";
}

setInterval(function() {
    Next();
}, 5000);
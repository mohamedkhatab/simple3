var welcome = document.getElementById("welcome");
var who = document.getElementById("who");
var what = document.getElementById("what");
var get = document.getElementById("get");
var header = document.getElementById("header");
var sss = document.getElementsByClassName("who")[0];
var ssss = document.getElementsByClassName("what")[0];
var sssss = document.getElementsByClassName("get")[0];



$(welcome).click(function(){
$("html ,body").animate({

        scrollTop:$(header).offset().top
    },1000);


});

$(who).click(function(){
$("html ,body").animate({

        scrollTop:$(sss).offset().top
    },1000);


});
$(what).click(function(){
$("html ,body").animate({

        scrollTop:$(ssss).offset().top
    },1500);


});

$(get).click(function(){
$("html ,body").animate({

        scrollTop:$(sssss).offset().top
    },2500);


});

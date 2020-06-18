$(document).ready(function () {
    "use strict";
$("a").click(function (){
    var content = $(this).text();
   if(content=="courses"){
$(".home").addClass("active").removeClass("idle").siblings().addClass("idle")
    .removeClass("active");   
       
   }else if(content=="profile"){
       $(".profile").addClass("active").removeClass("idle").siblings().addClass("idle")
           .removeClass("active");
       
   }else if(content=="settings"){
    $(".settings").addClass("active").removeClass("idle").siblings().addClass("idle").removeClass("active");   
   }
    
});
    $(".show-popup").click(function(){
       $(".popup").fadeIn(1000); 
    });
    
    
    $(".popup").click(function(){
       $(this).fadeOut(1000); 
    });
    
    $(".popup .box").click(function(e){
        e.stopPropagation();
    });
    
    
});





/*var currentSlider=0 ;
var    $slider = $(".slides");

var slidecount = $slider.children().length;

setInterval(function(){
    $slider.animate({
        marginLeft:"-=900px"
        
        
    },800,function(){
        currentSlider++;
        if(currentSlider === slidecount-1){
           currentSlider = 0;
            $(this).animate({marginLeft:"0px"},800);
            
           }
    })
},3000);


*/
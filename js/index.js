///<reference types="../@types/jquery"/>

// START HOME

$(".openNav").on('click',function(){
    $("#minu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").on('click',function(){
    $("#minu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})

$("#minu a").on('click',function({target}){
    
    var sectionId= $(target).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},500);
    
})

// START DURATION

$('#duration .toggle').on('click', function({target}){
    $(target).next().slideToggle(700);
    $('.inner').not($(target).next()).slideUp(700);

})

// START DETAIS 
window.onload = function() {
    var countDownDate = new Date("10 december 2023 9:56:00").getTime();
   var x = setInterval(function() {
     var now = new Date().getTime();
     var differance = countDownDate - now;
     var days = Math.floor(differance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((differance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((differance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((differance % (1000 * 60)) / 1000);
     $(".days").html(`${days} D`);
     $(".hours").html(`${hours} h`);
     $(".minutes").html(`${ minutes } m`);
     $('.seconds').html(`${ seconds} s`)
     if (differance < 0) {
       clearInterval(x);
       document.getElementById("demo").innerHTML = "EXPIRED";
     }
   }, 1000);
    
  }

// SATRT CONTACTS
var max=100;
$('textarea').on('keyup',function() {
    var currentLength= $('textarea').val().length;
   var leftChar= max-currentLength;
                if(leftChar<=0){
                $('#chars').text(" Your available character finished! ")
                }else{
                    $('#chars').text(leftChar)
                }
                
})
   












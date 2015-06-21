$(document).ready(function() {
  
    setInterval(mouseshyAnimate, 100000);

    $("#mouseshy").click(function() {
      $("#flutterYay")[0].play();
    });
});

function mouseshyAnimate () {
  
  $("#mouseshy").animate({
      bottom: "0%",
    }, 
    1000, function() {
   // Animation Complete
   });
   
  $("#mouseshy").animate({
      left: "90%%",
      transform: 'skewX(20deg)'
    }, 
    1000, function() {
   // Animation Complete
   });
   
  $("#mouseshy").animate({
      bottom: "-5%",
      transform: 'skewX(0deg)'
    }, 
    500, function() {
    // Animation Complete
    $( "#mouseshy" ).css({
      'left': "5%",
    });
   });
   

   
}
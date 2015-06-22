var now = new Date();
var hours = now.getHours();
var time = hours + now.getMinutes()/60;
var timePercent = time/24*100;


$(document).ready(function() {

  $("#sun").css({
    'left': (timePercent/2) - 25 + '%',
    'top': '5%',
  });

  
  $('#sky').addClass("sky-gradient-"+hours);

  
});

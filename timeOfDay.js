var now = new Date();
var time = now.getHours() + now.getMinutes()/60;
var timePercent = time/24*100;


$(document).ready(function() {

  $("#sun").css({
    'left': timePercent + '%',
    'top': '5%',
  });

});
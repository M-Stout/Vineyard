var now = new Date();
var hours = now.getHours()+0;
var time = hours + now.getMinutes()/60;
var timePercent = time/24*100;


$(document).ready(function() {

  $('#sky').addClass("sky-gradient-"+hours);

  $("#sun").css({
    'left': (timePercent*2) - 60 + '%',
    'top': '5%',
  });
  
  if (timePercent<26){
    $("#moon").css({
      'left': (timePercent*2) + 60 + '%',
      'top': '5%',
    });
  }
  if (timePercent>76){
    $("#moon").css({
      'left': (timePercent*2) - 160 + '%',
      'top': '5%',
    });
  }
  


});


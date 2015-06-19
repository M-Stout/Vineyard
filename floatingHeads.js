var images = ['winebarrelrocketpixelly.png', 'scifri swadloon.png', 'sciencefriction.png', 'sciencefriction.png', 'salamandersoul.png', 'dappercoat.png', 'pichu.png', 'brianguitarpixel.png', 'spacecore.png', 'spacecore.png']
var audios = ['rocket', 'swadloon', 'sciencegold', 'sciencebible', 'salamander', 'dapperdankmemes', 'pichuwaffles', 'musicmess', 'spaceshort', 'spacelong']
var direction = ['0', '0', '0', '0', '0', '1', '0', '0', '0', '0']

var randomIndex = 0;

$(document).ready(function() {
  
    $( "#floatingHead" ).css({
      'right': "-10%",
      'top': Math.random() * 40 + 0 +'%',
      transform: 'rotate(0deg)'
    });
    
    var randomIndex = Math.floor(Math.random() * images.length);
    $("#floatingHead").attr("src","images/" + images[randomIndex]);
    $("#floatingVoice").attr("src","audio/" + audios[randomIndex] + ".mp3");

    setInterval(floatBy, 10000);

});

function floatBy () {
  
  //right to left or left to right
  if (direction[randomIndex] == '1') {
    
    $( "#floatingHead" ).css({
        'right': "110%",
    });
    $("#floatingVoice")[0].play();
    $( "#floatingHead" ).animate({
      right: "-10%",
      transform: 'rotate(160deg)'
    }, 5000, function() {
      
     // Animation Complete
      $( "#floatingHead" ).css({
        'top': Math.random() * 40 + 0 +'%',
        transform: 'rotate(0deg)'
      });
      
      var randomIndex = Math.floor(Math.random() * images.length);
      $("#floatingHead").attr("src","images/" + images[randomIndex]);
      $("#floatingVoice").attr("src","audio/" + audios[randomIndex] + ".mp3");
    });
  } else {
    
      $( "#floatingHead" ).css({
          'right': "-10%",
      });    
      $("#floatingVoice")[0].play();
      $( "#floatingHead" ).animate({
      right: "110%",
      transform: 'rotate(160deg)'
      }, 5000, function() {
      
     // Animation Complete
      $( "#floatingHead" ).css({
        'top': Math.random() * 40 + 0 +'%',
        transform: 'rotate(0deg)'
      });
      
      var randomIndex = Math.floor(Math.random() * images.length);
      $("#floatingHead").attr("src","images/" + images[randomIndex]);
      $("#floatingVoice").attr("src","audio/" + audios[randomIndex] + ".mp3");
    });
  }
  
  
  

}
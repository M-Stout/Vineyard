var images = ['winebarrelrocketpixelly.png',                                                   'scifri swadloon.png',                                    'sciencefriction.png',          'sciencefriction.png',          'salamandersoul.png',           'dappercoat.png',                                                                                                    'pichu.png',                    'brianguitarpixel.png',         'spacecore.png',                'spacecore.png',                'spacekitten.png']
var audios = ['rocket',                                                                        'swadloon',                                               'sciencegold',                  'sciencebible',                 'salamander',                   'dapperdankmemes',                                                                                                   'pichuwaffles',                 'musicmess',                    'spaceshort',                   'spacelong',                    'spacekittens']
var links  = ['http://www.reddit.com/r/VineyardCommunity/comments/2x0kof/vineyard_spaceship/', 'https://twitter.com/grimer30/status/574726111818551297', 'https://youtu.be/mSySj33MPHo', 'https://youtu.be/ZwEudqX4Oi0', 'https://youtu.be/A4-QXjz2NFY', 'https://www.reddit.com/r/VineyardCommunity/comments/37cn2h/vineyard_map_unnecessary_swank_update_floating/crm40d1', 'https://youtu.be/utSqPGhQB4M', 'https://youtu.be/fqLv_hcQtow', 'https://youtu.be/xeKMS62GrTI', 'https://youtu.be/xeKMS62GrTI', 'https://twitter.com/derz_niemi', 'https://www.google.co.uk/', 'https://www.google.co.uk/']

var randomIndex = 0;

$(document).ready(function() {
  
    $( "#floatingHead" ).css({
      'right': "-10%",
      'top': Math.random() * 40 + 0 +'%',
      transform: 'rotate(0deg)'
    });
    
    var randomIndex = Math.floor(Math.random() * images.length);
    $("#floatingHeadIMG").attr("src","images/" + images[randomIndex]);
    $("#floatingVoice").attr("src","audio/" + audios[randomIndex] + ".mp3");
    $("#floatingHead").attr("href", links[randomIndex]);

    setInterval(floatBy, 10000);

});

function floatBy () {
  
    
    $( "#floatingHead" ).css({
        'right': "-10%",
    });
    

    $("#floatingVoice")[0].play();
    
    $( "#floatingHead" ).animate({
      right: "110%",
      transform: 'rotate(160deg)'
    }, 
    5000, function() {
    
   // Animation Complete
    $( "#floatingHead" ).css({
      'top': Math.random() * 40 + 0 +'%',
      transform: 'rotate(0deg)'
    });
    
    var randomIndex = Math.floor(Math.random() * images.length);
    $("#floatingHeadIMG").attr("src","images/" + images[randomIndex]);
    $("#floatingVoice").attr("src","audio/" + audios[randomIndex] + ".mp3");
    $("#floatingHead").attr("href", links[randomIndex]);
    
  });
  

}


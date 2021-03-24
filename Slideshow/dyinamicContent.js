
    // var config = require('IMGData.json');
    // console.log(config);
    
    // var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
    // var obj = JSON.parse(text, function (key, value){});

$( document ).ready(function() {
        for (i = 0; i < 5; i++) {
          $('.slideshow-container').append(
        '<div class="mySlides fade">' +
         ' <div class="numbertext">1 / 3</div> ' +
          '<img src="src/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif" style="width:100%">' +
         '<div class="text">Caption Text</div>' +
         ' </div>'
       );
        
        }
        });

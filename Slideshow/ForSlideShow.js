// var IMG = {
//   IMGarray: [
//     "src/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif",
//     "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg",
//     "src/1579461169_preview_Recent Best.jpg",
//     "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg",
//     "src/1579461169_preview_Recent Best.jpg",
//     "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg",
//     "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg"
//   ],
// };

// var obj = IMG.IMGarray[0];

// $(document).ready(function () {
//   for (i = 0; i < IMG.IMGarray.length; i++) {
//     $(".slideshow-container").append(
//       '<div class="mySlides fade">' +
//         ' <div class="numbertext">1 / 3</div> ' +
//         '<img src="'+IMG.IMGarray[i]+'" style="width:100%">' +
//         '<div class="text">IMG: '+i+'</div>' +
//         " </div>"
//     );
//   }

//   $(".slideshow-container").append(
//     ' <a class="prev" onclick="plusSlides(-1)">&#10094;</a>'
//   );
//   $(".slideshow-container").append(
//     '<a class="next" onclick="plusSlides(1)">&#10095;</a>'
//   );

//   for (i = 0; i < IMG.IMGarray.length; i++) {
//     $(".spans").append(
//       '<span class="dot" onclick="currentSlide('+i+')"></span>'
//     );
//   }
// });
var slideIndex = 1;

testWait()
startTimer ()

function startTimer () {
  timer.start();
  setTimeout(showSlides(slideIndex),500);
  timer.stop();
}

async function testWait() {
  await wait(5000);
  
  showSlides(slideIndex);
}



// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

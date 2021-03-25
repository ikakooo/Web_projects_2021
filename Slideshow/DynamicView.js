var IMG = {
  IMGarray: [
    "src/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif",
    "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg",
    "src/1579461169_preview_Recent Best.jpg",
    "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg",
    "src/1579461169_preview_Recent Best.jpg",
    "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg",
    "src/0a4dcb92fa2d3c601b58d72720d6bec4.jpg",
    "src/outrun-vaporwave-hd-wallpaper-thumb.jpg"
  ],
};

var obj = IMG.IMGarray[0];

$(document).ready(function () {
  for (i = 0; i < IMG.IMGarray.length; i++) {
if(i==0){
  $(".slideshow-container").append(
    '<div class="mySlides fade" style="display: block;">' +
      ' <div class="numbertext">'+(i+1)+' / '+IMG.IMGarray.length+'</div> ' +
      '<img src="' +
      IMG.IMGarray[i] +
      '" style="width:100%">' +
      '<div class="text">IMG: ' +
      (i+1)+
      "</div>" +
      " </div>"
  );

}else{
   $(".slideshow-container").append(
      '<div class="mySlides fade" style="display: none;">' +
        ' <div class="numbertext">'+(i+1)+' / '+IMG.IMGarray.length+'</div> ' +
        '<img src="' +
        IMG.IMGarray[i] +
        '" style="width:100%">' +
        '<div class="text">IMG: ' +
        (i+1) +
        "</div>" +
        " </div>"
    );
}


   
  }

  $(".slideshow-container").append(
    ' <a class="prev" onclick="plusSlides(-1)">&#10094;</a>'
  );
  $(".slideshow-container").append(
    '<a class="next" onclick="plusSlides(1)">&#10095;</a>'
  );

  for (i = 0; i < IMG.IMGarray.length; i++) {
    if (i == 0) {
      $(".spans").append(
        '<span class="dot active" onclick="currentSlide(' + i + ')"></span>'
      );
    } else {
      $(".spans").append(
        '<span class="dot" onclick="currentSlide(' + i + ')"></span>'
      );
    }
  }
});

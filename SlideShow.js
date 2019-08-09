var imageIndex = 0
slides();

function slides(){
  var image;
  var images = document.getElementsbyClassName("effects")
  for (image = 0; image < images.length; image++){
    images[image].style.display = none;
  }
  imageIndex++;
  if (imageIndex > images.length) {
    imageIndex = 1;
  }
  images[imageIndex - 1].style.display = "block";
  setTimeout(slides, 5000);
}

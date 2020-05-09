var imageIndex = 0
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex +=n);
}
function currentSlide(n){
  showSlides(slideIndex = n);
}
function showSlides(n){}
  var image;
  var images = document.getElementsbyClassName("slides")
  var circles = document.getElementsbyClassName("circle")
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for (image = 0; image < images.length; image++){
    images[image].style.display = "none";
  }
  for (circle = 0; circle < circles.length; circle++){
    circles[circle].className = circles[circle].className.replace(" active", "");
  }
  images[imageIndex - 1].style.display = "block";
  circles[slideIndex - 1].className += " active";
}

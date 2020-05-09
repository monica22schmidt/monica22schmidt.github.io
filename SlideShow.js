var imageIndex = 1;
showSlides(imageIndex);

function plusSlides(n){
  showSlides(imageIndex += n);
}
function currentSlide(n){
  showSlides(imageIndex = n);
}
function showSlides(n){}
  var i;
  var slides = document.getElementsbyClassName("slides")
  var circles = document.getElementsbyClassName("circle")
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++){
    circles[i].className = circles[i].className.replace(" active", "");
  }
  images[imageIndex - 1].style.display = "block";
  circles[imageIndex - 1].className += " active";
}

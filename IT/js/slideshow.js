var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("column"); 
   slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,2000);
}



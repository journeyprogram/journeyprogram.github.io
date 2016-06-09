$(document).ready(function(){
  $('.questions-container').slick({
    infinite:   false,
    fade:       true,
    adaptiveHeight: true,
    prevArrow:  $('.prev'),
    nextArrow:  $('.next')
  });
});

// On before slide change
$('.questions-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var slideNo = nextSlide + 1;
  var penultimate = slick.slideCount - 1;
  console.log(slideNo + " / " + slick.slideCount);
  if (slideNo === slick.slideCount ) {
    returnScore();
  } else if (slideNo === penultimate) {
    clearResults();
  } else {
    console.log("Wait for it...");
  }
});

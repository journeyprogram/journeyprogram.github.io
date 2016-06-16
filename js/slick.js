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
  var doCalc = slick.slideCount - 4;
  console.log(slideNo + " / " + slick.slideCount);

  $(".progress").css({
    'visibility': 'visible'
  });

  var progress = (slideNo / (slick.slideCount - 4)) * 100;

  $("#progressBar").css({
    'width': progress + '%'
  });

  if (slideNo === doCalc ) {
    returnScore();
    $('.next').prop('disabled', true);
  } else if (slideNo === doCalc - 1) {
    clearResults();
    $('.next').prop('disabled', false);
  } else {
    console.log("Wait for it...");
  }
});

//  Journey Progam Custom JS
//
//  Uses jQuery of course!

var loadCheck = "jpscripts.js is loaded!";
var runCheck = "Everything in jpscripts.js has run!";

console.log(loadCheck);

// Open all external links in a new tab

$("a[href^='http://']").attr("target","_blank");


// Open all external secure links in a new tab

$("a[href^='https://']").attr("target","_blank");


// Make anchor links scroll smoothly to target

$('a.smooth_scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 600);
  return false;
});

// Set height of .feature-photo

dynanicPhotoHeight();

$( window ).resize(function() {
  dynanicPhotoHeight();
});

function dynanicPhotoHeight() {
  var featurePhotoWidth = $( ".feature-photo" ).width();
  $(".feature-photo").css("height", (featurePhotoWidth * 0.66));
}

// Dynamically set bottom margin of body for sticky footer

stickyFooter();

$( window ).resize(function() {
  stickyFooter();
});

function stickyFooter() {
  var bodyBottomMargin = $( ".site-footer" ).outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
}

// Get height of the page and set signup min height
function signupHeight() {
 var desiredHeight = $( window ).height() - $(".site-header").outerHeight() - $(".site-footer").outerHeight();
 $("#signup").css("min-height", desiredHeight);
}

signupHeight();

$( window ).resize(function() {
 signupHeight();
});

console.log(runCheck);

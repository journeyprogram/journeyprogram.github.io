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


// Dynamically set bottom margin of body for sticky footer

stickyFooter();

$( window ).resize(function() {
  stickyFooter();
});

function stickyFooter() {
  var bodyBottomMargin = $( ".site-footer" ).outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
}

console.log(runCheck);

// Submits email signups to Mailchimp
// via AJAX rather than opening a new tab.

// Thanks to rydama on Github
// https://github.com/rydama/mailchimp-ajax-signup/blob/master/ajax-subscribe.html

$(document).ready(function(){
  ajaxMailChimpForm($("#subscribe-form"), $("#subscribe-result"));
  // Turn the given MailChimp form into an ajax version of it.
  // If resultElement is given, the subscribe result is set as html to
  // that element.
  function ajaxMailChimpForm($form, $resultElement){
    // Hijack the submission. We'll submit the form manually.
    $form.submit(function(e) {
      e.preventDefault();
      if (!isValidEmail($form)) {
        var error =  "Please provide a valid email address.";
        $resultElement.html(error);
        $resultElement.css("color", "red");
      } else {
        $resultElement.css("color", "black");
        $resultElement.html("Subscribing...");
        submitSubscribeForm($form, $resultElement);
      }
    });
  }
  // Validate the email address in the form
  function isValidEmail($form) {
    // If email is empty, show error message.
    // contains just one @
    var email = $form.find("input[type='email']").val();
    if (!email || !email.length) {
      return false;
    } else if (email.indexOf("@") == -1) {
      return false;
    }
    return true;
  }
  // Submit the form with an ajax/jsonp request.
  // Based on http://stackoverflow.com/a/15120409/215821
  function submitSubscribeForm($form, $resultElement) {
    $.ajax({
      type: "GET",
      url: $form.attr("action"),
      data: $form.serialize(),
      cache: false,
      dataType: "jsonp",
      jsonp: "c", // trigger MailChimp to return a JSONP response
      contentType: "application/json; charset=utf-8",
      error: function(error){
        // According to jquery docs, this is never called for cross-domain JSONP requests
      },
      success: function(data){
        if (data.result != "success") {
          var message = data.msg || "Sorry. Unable to subscribe. Please email support@uproute.co";
          $resultElement.css("color", "red");
          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            message = "You're already subscribed! Awesome, thanks. If you'd like to double check, please email support@uproute.co";
            $resultElement.css("color", "black");
          }
          $resultElement.html(message);
        } else {
          $resultElement.css("color", "black");
          $resultElement.html("Thanks for signing up! You'll hear from us soon.");
        }
      }
    });
  }
});

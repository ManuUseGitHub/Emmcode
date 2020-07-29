/////////////////////////////////////////////////
//PHP widgets - contact form, search, MailChimp//
/////////////////////////////////////////////////

//contact form processing
$("form.contact-form").on("submit", function(e) {
  e.preventDefault();
  var $form = $(this);
  $($form)
    .find(".contact-form-respond")
    .remove();

  //checking on empty values
  $($form)
    .find('[aria-required="true"], [required]')
    .each(function(index) {
      var $thisRequired = $(this);
      if (!$thisRequired.val().length) {
        $thisRequired.addClass("invalid").on("focus", function() {
          $thisRequired.removeClass("invalid");
        });
      }
    });
  //if one of form fields is empty - exit
  if ($form.find('[aria-required="true"], [required]').hasClass("invalid")) {
    return;
  }

  //sending form data to PHP server if fields are not empty
  var request = $form.serialize();

  var ajax = jQuery
    .post("contact-form.php", request)
    .done(function(data) {
      $($form)
        .find('[type="submit"]')
        .attr("disabled", false)
        .parent()
        .append(
          '<div class="contact-form-respond color-main mt-20">' +
            data +
            "</div>"
        );
      //cleaning form
      var $formErrors = $form.find(".form-errors");
      if (!$formErrors.length) {
        $form[0].reset();
      }
    })
    .fail(function(data) {
      $($form)
        .find('[type="submit"]')
        .attr("disabled", false)
        .blur()
        .parent()
        .append(
          '<div class="contact-form-respond color-main mt-20">Mail cannot be sent. You need PHP server to send mail.</div>'
        );
    });
});

/* Newsletter form */

$(document).ready(function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  $('#email-input').on('input', function() {
	const email = $(this).val();
	const isValid = emailRegex.test(email);
	$('#submit-button').prop('disabled', !isValid).toggleClass('active', isValid);
  });

  $('#submit-button').on('click', function() {
	const email = $('#email-input').val();
	if (emailRegex.test(email)) {
	  // Show spinner and hide submit text
	  $(this).html('<i class="fas fa-spinner fa-spin"></i>').prop('disabled', true);

	  $.ajax({
		url: 'send_email.php',
		type: 'POST',
		data: { email: email },
		success: function(response) {
		  if (response === 'success') {
			$('#email-input').val('');
			$('#newsletter-label').fadeOut(function() {
			  $(this).text('thanks for your interest!').fadeIn();
			});
			// Hide spinner and show submit text
			$('#submit-button').removeClass('active').prop('disabled', true).text('Submit');
		  }
		},
		error: function() {
		  // Hide spinner and show submit text
		  $('#submit-button').text('Submit');
		  // Handle any errors that occur during the AJAX request
		}
	  });
	}
  });
});
$(document).ready(function() {
$('#contactForm').submit(function(event) {
event.preventDefault();
var formData = $(this).serialize();
$.ajax({
        type: 'POST',
        url: 'contact.php',
        data: formData,
        success: function(response) {
          $('#response').html(response);
          $('#contactForm')[0].reset();
        }
      });
    });
});
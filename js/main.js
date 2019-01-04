$(document).ready(function() {
    
    // Function which allows to scroll to specific point after pressing an arrow
    $("#scroll-button").on('click', function() {
        adjustAnchor();
    });

    // On startup, make customiser default size, change it if window resized
    if (document.getElementById('customiser_output') !== null) {
        $('#layer1').height($('#layer1').width() / 1.18);
        $('#layer2').height($('#layer2').width() / 1.18);
        $('#layer3').height($('#layer3').width() / 1.18);
        $('#layer4').height($('#layer4').width() / 1.18);
        $(window).resize(function(){
        $('#layer1').height($('#layer1').width() / 1.18);
        $('#layer2').height($('#layer2').width() / 1.18);
        $('#layer3').height($('#layer3').width() / 1.18);
        $('#layer4').height($('#layer4').width() / 1.18);
      });
    };

    // If newsletter button is pressed or buy now button, show message box
    $( ".newsletter_button_link" ).click(function(event) {
      event.preventDefault();
      $( ".overlay" ).fadeIn( "slow",
      function() {
        $( ".overlay" ).delay(5000).fadeOut("slow");
      });
    });
    $( ".buy_button" ).click(function(event) {
      console.log('clicked');
      event.preventDefault();
      $( ".overlay" ).fadeIn( "slow",
      function() {
        $( ".overlay" ).delay(5000).fadeOut("slow");
      });
    });

    // If close button is pressed on message box, close the message box
    $( ".close" ).click(function(event) {
      event.preventDefault();
      $( ".overlay" ).hide();
    });

    // If menu buttom is pressed on mobile, slide menu out
		$("body").on('click', '.menu_icon', function() {
			$(".mobile_menu").toggleClass("menu_show");
		})



  });


// Function which scrolls the website when neeeded
var adjustAnchor = function() {
			 var $anchor = $('#scroll-stop'),fixedElementHeight = 55;
			 if ($anchor.length > 0) {
					 $('html, body')
							 .stop()
							 .animate({scrollTop: $anchor.offset().top - fixedElementHeight}, 200);
			 }
	 };

// Function which allows to make menu icon animation
function animateMenu(x) {
    x.classList.toggle("change");
};

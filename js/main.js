$(document).ready(function() {
        $("#scroll-button").on('click', function() {
            adjustAnchor();
        })
		document.getElementById("scroll-button").style.cursor = "pointer";

    $( ".newsletter_button_link" ).click(function(event) {
      event.preventDefault();
      console.log('clicked');
      $( ".overlay" ).fadeIn( "slow",
      function() {
        $( ".overlay" ).delay(5000).fadeOut("slow");
      });
    });

    $( ".close" ).click(function(event) {
      event.preventDefault();
      console.log('clicked');
      $( ".overlay" ).hide();
    });

		$("body").on('click', '.menu_icon', function() {
			$(".mobile_menu").toggleClass("menu_show");
		})


  });



var adjustAnchor = function() {
			 var $anchor = $('#scroll-stop'),fixedElementHeight = 55;
			 if ($anchor.length > 0) {
					 $('html, body')
							 .stop()
							 .animate({scrollTop: $anchor.offset().top - fixedElementHeight}, 200);
			 }
	 };

function animateMenu(x) {
    x.classList.toggle("change");
};

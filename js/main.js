$(document).ready(function() {
        $("#scroll-button").on('click', function() {
            adjustAnchor();
        })
    if (document.getElementById('scroll-button') !== null) {
      document.getElementById("scroll-button").style.cursor = "pointer";
    }
    $('#layer1').height($('#layer1').width() / 1.18);
    $('#layer2').height($('#layer2').width() / 1.18);
    $('#layer3').height($('#layer3').width() / 1.18);
    $('#layer4').height($('#layer4').width() / 1.18);

    if (document.getElementById('customiser') !== null) {
        $(window).resize(function(){
        $('#layer1').height($('#layer1').width() / 1.18);
        $('#layer2').height($('#layer2').width() / 1.18);
        $('#layer3').height($('#layer3').width() / 1.18);
        $('#layer4').height($('#layer4').width() / 1.18);
      });
    };


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

$(document).ready(function() {
        $("#scroll-button").on('click', function() {
            adjustAnchor();
        })
		document.getElementById("scroll-button").style.cursor = "pointer";



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

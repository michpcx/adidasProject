$(document).ready(function() {
		var adjustAnchor = function() {
            var $anchor = $('#scroll-stop'),fixedElementHeight = 55;
            if ($anchor.length > 0) {
                $('html, body')
                    .stop()
                    .animate({scrollTop: $anchor.offset().top - fixedElementHeight}, 200);
            }
        };
        $("#scroll-button").on('click', function() {
            adjustAnchor();
        })
		document.getElementById("scroll-button").style.cursor = "pointer"; 
   });
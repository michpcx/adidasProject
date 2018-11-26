function windowH() {
    var wH = $(window).height();
    
    $('.filler').css({height: wH});
}

var scrolled=0;
var down = document.getElementById('.down');
$( document ).ready(function() {
	windowH();
	
	
	$(".arrow_down").click(function(){
                scrolled=scrolled+976;
				$([document.documentElement, document.body]).animate({scrollTop: scrolled}, 1000);
			});
});

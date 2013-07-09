$(document).ready(function(){
	var windowWidth = 0;
	var windowHeight = $(window).innerHeight();


	if ($(window).width() > 600){
		$('section.home').css({
			'height' : windowHeight + 'px'
		});
	}
	
	


	$('.home .scroll').click(function(){
		$(window).scrollTo('.work', 1000);
	});


	
});
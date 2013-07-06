$(document).ready(function(){
	var windowWidth = 0;
	var windowHeight = $(window).innerHeight();

	$('section.home').css({
		'height' : windowHeight + 'px'; 
	});
	
	// $(window).resize(function(){
	// 	windowWidth = $(window).innerWidth();
	// 	$('.callout h2').text(windowWidth + 'px');
	// });


	
});
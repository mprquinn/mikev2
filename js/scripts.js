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

	function getBlog(){
		var blog = tumblr_api_read;
		var length = 500;
		var posts = 1;
		var date = '';
		var post = '';
		var link = '';

		for(i=0; i<posts; i++){
			date = blog.posts[i].date;
			post = blog.posts[i]['regular-body'];
			link = blog.posts[i].url;
			$('.blog .date').html(date);
			$('.blog .post').html(post);
			$('.blog .post').append('<p><a class="button" href="' + link +'" target="_blank">' + 'View on Tumblr' +'</a></p>');
		}

	}

	getBlog();

});
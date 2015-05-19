$(document).ready(function(){

	$('#comicBox img').css('width',  $('#comicBox').width());

	var newTop = (($(window).height() - $('#comicBox').height())/3.5);
	$('#comicBox').css('margin-top', newTop);

	var newLeft = (($(window).width() - $('#comicBox').width())/2);
	$('#comicBox').css('margin-left', newLeft);

	$('#comicBox a.pos').attr('href', $('#comicBox img#comicImg').attr('src'));

	$('#comicBox a.pos').on('click', function(e){

		$('<div id="overlay"></div>')
			.css('top', $(document).scrollTop())
			.css('opacity', '0')
			.animate({'opacity': "0.6"}, 'slow')
			.click(function() {
				removeLightbox()
			})
			.appendTo('body');

			var lightWidth = 197;
		var lightHeight = 169;
		var changeId = $(this).attr('rel');
			switch(changeId)
			{
				case 'posOne':
					imgTop = '-3px';
					imgLeft = '-2px';
					lightWidth = '300px';
					lightHeight = '455px';
				break;
				case 'posTwo':
					imgTop = '-3px';
					imgLeft = '-308px';
					lightWidth = '305px';
					lightHeight = '455px';
				break;
				case 'posThree':
					imgTop = '-3px';
					imgLeft = '-625px'
					lightWidth = '305px';
					lightHeight = '455px';
				break;
				case 'posFour':
					imgTop = '-470px';
					imgLeft = '-2px'
					lightWidth = '300px';
					lightHeight = '455px';
				break;
				case 'posFive':
					imgTop = '-470px';
					imgLeft = '-308px'
					lightWidth = '305px';
					lightHeight = '455px';
				break;
				case 'posSix':
					imgTop = '-470px';
					imgLeft = '-625px'
					lightWidth = '305px';
					lightHeight = '455px';
				break;
			}

			$('<div id="lightbox"></div>')
			.hide()
			.appendTo('body')
			.css({ 
				width: lightWidth,
				height: lightHeight
			});

			$('<img>')
			.attr('src', $(this).attr('href'))
			.load(function() {
				positionLightboxImage();
			})
			.click(function() {
				removeLightbox();
			})
			.appendTo('#lightbox')
			.css({
				position:"relative",
				top: imgTop,
				left: imgLeft
			});
			
			e.preventDefault();
	})
	
	});

function positionLightboxImage() {
	var top=($(window).height() - $('#lightbox').height()) / 2;
	var left=($(window).width() - $('#lightbox').width()) / 2;
	$('#lightbox')
	.css({
		'top': top + $(document).scrollTop(),
		'left': left

	})
	.fadeIn();
}

function removeLightbox() {
	$('#overlay, #lightbox')
	.fadeOut('slow', function() {
		$(this).remove();
		$('body').css('overflow-y', 'auto');
	});
}
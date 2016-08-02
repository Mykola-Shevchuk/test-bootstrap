// SLIDER

$(document).ready(function($) {

	//configuration
	var width = 720;
	var	animationSpeed = 1000;
	var currentSlide = 1;
	var position = 0;

	// cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	// navigation
	var $left = $('.left-arrow');
	var $right = $('.right-arrow');


	function nav() {
		$right.stop().on('click', function() {
			position = Math.max(position - width * currentSlide, -width * ($slides.length - currentSlide));

			$slideContainer.stop().animate({
				marginLeft: position + 'px' 
			}, animationSpeed, function() {

			});
		});

		$left.stop().on('click', function() {
			position = Math.min(position + width * currentSlide, 0)

			$slideContainer.stop().animate({
				marginLeft:  position + 'px'
			}, animationSpeed, function() {

			});
		});
	}

	nav();
});

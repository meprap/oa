/*	===================================================================
	Custom JS
	=================================================================== */
	$(document).ready(function(){

		// Main Carousel Property
		$('.carousel').carousel({
			interval: 10000,
			pause: false
		})

		// Isotope Initialization
		$("#loader").show();
		$(".maso-wrap").hide();
		var $container = $('.maso-wrap');

		if($container.length > 0){
			$container.imagesLoaded( function(){
				$("#loader").hide();
				$(".maso-wrap").show();

				$container.isotope({
					// options
					itemSelector: '.box'
				});
			});
		}

		// Resize adjustment
		$(window).resize(function() {
			footerAdjustment();
			carouselAdjustment();
			headerAdjustment();
		});
		footerAdjustment();
		carouselAdjustment();
		headerAdjustment();

	});

	// Smooth Scroll
	$(".smooth-scroll a[href^='#']").on('click', function(e) {

		// prevent default anchor click behavior
		e.preventDefault();

		// animate
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - ($('nav').height() - 50)
		}, 900, function(){

			// when done, add hash to url
			// (default click behaviour)
			// window.location.hash = this.hash;
		});

	});

	// Sticky Footer
	function footerAdjustment() {
		var height = $(".footer--main").outerHeight();
		$("#push").css('height', height);
		$("#wrap").css('margin-bottom', '-'+height+'px');
	}

	// Adding Gutter for the Content under Header
	function headerAdjustment() {
		var height = $(".header--main").outerHeight();
		//$("#banner").css('padding-top', ''+height+'px');
		$(".title-holder").css('padding-top', ''+height+'px');
		$("main").css('padding-top', ''+height+'px');
	}

	// Setting the height of the 100% height carousel
	function carouselAdjustment() {
		//var height = $(window).height() - $(".header--main").outerHeight();  //getting windows height
		//$('#myCarousel').css('height',(height)+'px');   //and setting height of carousel
	}

	// Off Canvas Menu
	(function () {
		var body = $('#wrap, .header--main, .footer--main');
		$('.nav-toggle').bind('click', function() {
			body.toggleClass('menu-open');
			return false;
		});
	})();

	$(function(){
    $('form.material').materialForm(); // Apply material
    $('form').validate({ 
        errorPlacement: function(error, element) {}
    }); // Apply validator with no error messages but classes only

    $('.panel-heading').on('click', function () {
        $('.panel-heading').show();
        $(this).hide();
    })
});

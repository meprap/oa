$(document).ready(function () {

	// Main Carousel Property
	$('.carousel').carousel({
		interval: 10000,
		pause: false
	})

	// Resize adjustment
	$(window).resize(function () {
		footerAdjustment();
		headerAdjustment();
	});
	footerAdjustment();
	headerAdjustment();

});

// Sticky Footer
function footerAdjustment() {
	var height = $(".footer--main").outerHeight();
	$("#push").css('height', height);
	$("#wrap").css('margin-bottom', '-' + height + 'px');
}

// Adding Gutter for the Content under Header
function headerAdjustment() {
	var height = $(".header--main").outerHeight();
	//$("#banner").css('padding-top', ''+height+'px');
	$(".title-holder").css('padding-top', '' + height + 'px');
	$("main").css('padding-top', '' + height + 'px');
}

// Setting the height of the 100% height carousel
function carouselAdjustment() {
	//var height = $(window).height() - $(".header--main").outerHeight();  //getting windows height
	//$('#myCarousel').css('height',(height)+'px');   //and setting height of carousel
}

// Off Canvas Menu
(function () {
	var body = $('#wrap, .header--main, .footer--main');
	$('.nav-toggle').bind('click', function () {
		body.toggleClass('menu-open');
		return false;
	});
})();

$(function () {
	$('form.material').materialForm(); // Apply material
	$('form').validate({
		errorPlacement: function (error, element) { }
	}); // Apply validator with no error messages but classes only

	$('.panel-heading').on('click', function () {
		$('.panel-heading').show();
		$(this).hide();
	})
});

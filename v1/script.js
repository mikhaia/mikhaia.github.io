// import SimpleParallax from "simple-parallax-js/vanilla";

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);

// var images = document.querySelectorAll('img');
// new simpleParallax(images);

var ContentOwlcarousel = function () {
    

	var _initInstances = function _initInstances() {
		$("[data-slider='owl'] .owl-carousel").each(function () {

			var parent = $(this);

			var items;
			var itemsDesktop;
			var itemsDesktopSmall;
			var itemsTablet;
			var itemsTabletSmall;
			var itemsMobile;

			var rtl_mode = parent.data('rtl') ? parent.data('rtl') : false;
			var items_loop = parent.data('loop') ? parent.data('loop') : true;
			var items_nav_dots = parent.attr('data-navigation-dots') ? parent.data('navigation-dots') : true;
			var items_nav_label = parent.attr('data-navigation-label') ? parent.data('navigation-label') : false;

			if (parent.data("single-item") == true) {
				items = 1;
				itemsDesktop = 1;
				itemsDesktopSmall = 1;
				itemsTablet = 1;
				itemsTabletSmall = 1;
				itemsMobile = 1;
			} else {
				items = parent.data('items');
				itemsDesktop = parent.data('desktop-items') ? parent.data('desktop-items') : items;
				itemsDesktopSmall = parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3;
				itemsTablet = parent.data('tablet-items') ? parent.data('tablet-items') : 2;
				itemsMobile = parent.data('mobile-items') ? parent.data('mobile-items') : 1;
			}

			parent.owlCarousel({

				rtl: rtl_mode,
				loop: items_loop,
				items: items,
				responsive: {
					0: {
						items: itemsMobile
					},
					480: {
						items: itemsMobile
					},
					768: {
						items: itemsTablet
					},
					980: {
						items: itemsDesktopSmall
					},
					1200: {
						items: itemsDesktop
					}
				},

				dots: items_nav_dots,
				nav: items_nav_label,
				navText: false,
				autoplay: parent.data("auto-play") ? parent.data("auto-play") : true,
				autoplayTimeout: parent.data('slide-speed'),
				autoplayHoverPause: parent.data('auto-play-hover-pause') ? parent.data('auto-play-hover-pause') : false
			});
		});
	};

	return {

		//main function to initiate the module
		init: function init() {

			_initInstances();
		}

	};
}();

$(document).ready(function () {
    ContentOwlcarousel.init();
});

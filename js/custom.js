jQuery(document).ready(function($){
	//slider
	$('.slide-withthumbs').slick({ //add in your correct containing element
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('#thumb.prev'),
		nextArrow: $('#thumb.next'),
		fade: true,
		adaptiveHeight: true,
		waitForAnimate: false,
		asNavFor: '.slide-nav, .slide-withthumbs2'
	});
	$('.slide-withthumbs2').slick({ //add in your correct containing element
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('#thumb.prev'),
		nextArrow: $('#thumb.next'),
		fade: true,
		adaptiveHeight: true,
		waitForAnimate: false,
		asNavFor: '.slide-nav, .slide-withthumbs'
	});
	$('.slide-nav').slick({
	  	slidesToShow: 10,
	  	slidesToScroll: 1,
	  	asNavFor: '.slide-withthumbs, .slide-withthumbs2',
	  	  //centerMode: true,
	  	focusOnSelect: true,
	  	waitForAnimate: false,
	  	adaptiveHeight: true,
	  	prevArrow: $('#thumb.prev'),
		nextArrow: $('#thumb.next'),
	});


	//фиксим превьюшки после изменения окна			
	$(window).resize(function(){
      $('.slide-nav, .slide-withthumbs')[0].slick.refresh();
      //$(".slide-gallery").slick('reinit');
    });


	$('.slide-photos').slick({ //add in your correct containing element
	    slidesToShow: 5,
	    slidesToScroll: 1,
	      // autoplay: true,
	      // autoplaySpeed: 20000,
	    dots: false,
	    waitForAnimate: false,
	    responsive: [{

	      breakpoint: 991,
	      settings: {
	        slidesToShow: 4,
	      }

	    }, {

	      breakpoint: 767,
	      settings: {
	        slidesToShow: 3,
	      }

	    }, {

	      breakpoint: 575,
	      settings: {
	        slidesToShow: 2,
	      }

	    }]

    });

	
	$('.slide-blocks2').slick({ //add in your correct containing element
	    slidesToShow: 3,
	    slidesToScroll: 1,
	      // autoplay: true,
	      // autoplaySpeed: 20000,
	    dots: false,
	    waitForAnimate: false,
	    swipeToSlide: true,

	    responsive: [{

	      breakpoint: 991,
	      settings: {
	        slidesToShow: 2,
	      }

	    }, {

	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	      }

	    }, {

	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1,
	        adaptiveHeight: true,
	      }

	    }]

    });


    //menu
  $(function () {
    $('.burger').click(function(evt) {
        evt.stopPropagation(); //stops the document click action
        $('body').toggleClass('menu--open');
    });
    // $(document).click(function() {
    //     $('body').removeClass('menu--open'); //make all inactive
    // });
  });
  


});




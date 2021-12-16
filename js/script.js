$(document).ready(function() {
	AOS.init();


	$('#fallen-form').submit(function(ev) {
		ev.preventDefault();
		var formData = new FormData(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: formData,
			cache: false,
            contentType: false,
            processData: false,
			success: function(res){
				// console.log(res);
				$( ".form-call-wrapper" ).fadeOut(200);
				$(".form-success-wrapper").fadeIn(200);

			}
		});
	});

	$("#callbackForm").submit(function(ev) {
		ev.preventDefault();
		var formData = new FormData(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: formData,
			cache: false,
            contentType: false,
            processData: false,
			success: function(res){
				// console.log(res);
				$( ".form-call-wrapper" ).fadeOut(200);
				$(".form-success-wrapper").fadeIn(200);

			}
		});
	});

	$(function($){
		$(".phone").mask("+7 (999) 999 - 99 - 99");
	});

	//Появление формы обратной связи
	$('#exist-call').click(function() {
		$( ".form-call-wrapper" ).fadeOut(200);
	});//end slide toggle
	$('#icon-exist-form').click(function() {
		$( ".form-success-wrapper" ).fadeOut(200);
	});//end slide toggle
	$('.callme').click(function() {
		$( ".form-call-wrapper" ).fadeIn(200);
	});//end slide toggle

	$('.menu-button').click(function() {
		$( ".box-hidden" ).toggle(200);
	});

	$('.service-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<img class="slider-arrow" src="img/arrow-left.png">',
		nextArrow: '<img class="slider-arrow" src="img/arrow-right.png">',
		adaptiveHeight: true,
		responsive: [
	 	  	{
	 	  		breakpoint: 1300,
	 	  		settings: {
	 	  			slidesToShow: 3,
	 	  			slidesToScroll: 1,
	 	  			infinite: true

	 	  		}
	 	  	},
	 	  	{
	 	  		breakpoint: 1000,
	 	  		settings: {
	 	  			slidesToShow: 2,
	 	  			slidesToScroll: 1
	 	  		}
	 	  	},
	 	  	{
	 	  		breakpoint: 700,
	 	  		settings: {
	 	  			slidesToShow: 1,
	 	  			slidesToScroll: 1
	 	  		}
	 	  	}
	 	  	]

	});

	let tap = false;
	//Скрол Меню
	$('.a-archer').on('click', function(event) {
		event.preventDefault();

		if(tap == false){
			tap = true;
			var sc = $(this).attr("href"),
			dn = $(sc).offset().top;

			// console.log(dn);
			$('html, body').animate({scrollTop: dn}, 1000);
			tap = false;
		}

	});

	if($("#home").length){
		// glitch script
		function random(min, max) {
		  if (max == null) { max = min; min = 0; }
		  if (min > max) { var tmp = min; min = max; max = tmp; }
		  return min + (max - min) * Math.random();
		}
		var cosmoGlitchDiv = $(".glitch");
		function cosmoGlitch() {
			cosmoGlitchDiv.css({
				display: 'block',
			});
			var timerok = setTimeout(function() {
				cosmoGlitchDiv.css({
					display: 'none',
				});
			}, 100);
			setTimeout(function() {
				cosmoGlitch()
			}, random(500,4000));
		}
		cosmoGlitch();
	}



	

let ball1 = document.querySelector('.info-flex');
let ball1Top = ball1.getBoundingClientRect().top;

let ball2 = document.querySelector('.price');
let ball2Top = ball2.getBoundingClientRect().top;

let ball3 = document.querySelector('.service');
let ball3Top = ball3.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
if(window.pageYOffset > ball1Top) {
	$( ".ball1" ).animate({
		right: "130vw"

	  }, 1800 );
}
if(window.pageYOffset > ball2Top) {
	$( ".ball2" ).animate({
		left: "130vw"

	  }, 1800 );
}
if(window.pageYOffset > ball3Top) {
	$( ".ball3" ).animate({
		right: "130vw"

	  }, 1800 );
}
});



$('[data-fancybox]').fancybox({
		loop: true
	});









//said
	var myvar = 1;
	$(window).scroll(function (ev) {
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() > 600 && myvar == 1) {
			myvar = 0;
			$('.animation-wrapper').fadeIn();
			$('.animation-img-left').animate({
				"left": "-40px",
			},3000)
			$('.animation-img-right').animate({
				"right": "-40px",
			},3000)
			setInterval(function () {
				$('.animation-wrapper').fadeOut();
			}, 5000)
		}
	})


});//end ready

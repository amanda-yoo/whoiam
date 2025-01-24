$(document).ready(function(){
	$('.js_navi_menu').length && tabScroll(); // section navi
	$('.js_btn_vod_modal').length && youtubePop(); // youtube modal popup
	$('.js_btn_acco').length && accordion(); // accordion
	$('.js_camp_swiper').length && campSwiper(); // camp swiper
	// $('.js_story_swiper').length && storySwiper(); // story swiper
	// $('.js_lyrics_count').length && lyricsCount(); // lyrics auto count
})

// section scroll event
function tabScroll(){
	$('.js_navi_menu li a').on('click', function(){
		let targetId = $(this).data('target'),
			targetSec = $('#' + targetId).offset().top,
			targetSec2 = targetSec - 200;
		$('html').animate({
			scrollTop : targetSec2
		}, '2000');
		return false;
	})

	//sticky menu
	$(window).scroll(function(){
		let tabMenu = $('.js_navi_wrap'),
			menuTop = tabMenu.offset().top,
			menuTop2 = menuTop - 111,
			crtTop = $(window).scrollTop();
		if(menuTop2 < crtTop){
			tabMenu.addClass('fixed');
		}else{
			tabMenu.removeClass('fixed');
		}
	});
}

// Youtube modal popup
function youtubePop(){
	const modalPop = $('.js_vod_modal');
	const btnClose = $('.js_vod_close');
	const dim = $('#dim');

	$('.js_btn_vod_modal').on('click', function(){
		let targetData = $(this).data('video');
		const frameStart = "<iframe width='560' height='315' src='https://youtube.com/embed/";
		const frameEnd = "?autoplay=1&mute=1' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share' allowfullscreen></iframe>";

		$('body').addClass('ofh');
		dim.stop().fadeIn();
		modalPop.find('iframe').remove();
		modalPop.stop().fadeIn();
		modalPop.find('.modal_vod_conbox').append(frameStart + targetData + frameEnd)

		return false;
	});

	function popClose(){
		$('body').removeClass('ofh');
		dim.hide();
		modalPop.stop().fadeOut();
		modalPop.find('iframe').remove();
	};
	
	btnClose.on('click', function(){
		popClose();
	});

	dim.on('click', function(){
		popClose();
	});
}

// accordion
function accordion(){
	let accoBtn = $('.js_btn_acco');

	accoBtn.on('click', function(){
		let accoCon = $(this).siblings('.js_acco_con');
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			accoCon.stop().slideUp();
		}else{
			$(this).addClass('on');
			accoCon.stop().slideDown();
		}
		return false;
	})
}

// camp swiper
function campSwiper(){
	let camptSwiper = new Swiper('.js_camp_swiper',{
		slidesPerView: '1',
		spaceBetween : 20,
		loop:true,
		loopAdditionalSlides: 1,
		speed: 2000,
		centeredSlides: true,
		centeredSlidesBounds: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: '.js_camp_pagination',
			type: 'bullets',
			clickable: true,
		}
	});
}

// story swiper
function storySwiper(){
	let storySwiper = new Swiper('.js_story_swiper',{
		slidesPerView: '1',
		spaceBetween : 20,
		loop:true,
		loopAdditionalSlides: 1,
		speed: 2000,
		// centeredSlides: true,
		centeredSlidesBounds: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: '.js_story_pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation : {
			prevEl : '.js_story_prev',
			nextEl : '.js_story_next',
		},	
	});
}

// lyrics auto count
function lyricsCount(){
    setInterval(function(){
        let countNum = $('.js_lyrics_count span').html();
        let counter = parseInt(countNum);
        if (counter !== 0) {
            $('.js_lyrics_count span').html(counter - 1);
        }
    }, 600);
};
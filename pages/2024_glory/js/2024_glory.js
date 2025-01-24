$(document).ready(function(){
	$('.js_navi_menu').length && tabScroll(); // section navi
	$('.point_sec').length && secScroll(); // section scroll event
	$('.js_btn_vod_modal').length && youtubePop(); // youtube modal popup
	$('.js_btn_acco').length && accordion(); // accordion
	$('.js_camp_swiper').length && campSwiper(); // camp swiper
	// $('.js_story_swiper').length && storySwiper(); // story swiper
	// $('.js_lyrics_count').length && lyricsCount(); // lyrics auto count
	$('.js_vod_thumb').length && vodThumb(); //youtube thumbnail
})

// section scroll event
function tabScroll(){
	$('.js_navi_menu li a').on('click', function(){
		let targetId = $(this).data('target'),
			targetSec = $('#' + targetId).offset().top,
			targetSec1 = targetSec - 200;
		$('html').animate({
			scrollTop : targetSec1
		}, '2000');
		return false;
	})

	//sticky menu
	$(window).scroll(function(){
		let tabMenu = $('.js_navi_wrap'),
			menuTop = tabMenu.offset().top,
			crtTop = $(window).scrollTop();
		if(menuTop < crtTop){
			tabMenu.addClass('fixed');
		}else{
			tabMenu.removeClass('fixed');
		}
	});
}

// section scroll event
function secScroll(){
	const screenHeight = document.documentElement.clientHeight;
	$(window).scroll(function(){
		$('.item').each(function(){
			let crtHeight = $(window).scrollTop(); // current scroll top
			let targetSec = $(this); // target
			// let targetSec = $('.item_0' + i); // target

			let secStart = targetSec.offset().top; // target top
			let secHeight = targetSec.innerHeight(); // target height

			let targetStart = secStart - (screenHeight * 0.7); // event start point
			let targetEnd = targetStart + secHeight + (screenHeight * 0.5); // event end point

			if(targetStart < crtHeight){
				targetSec.addClass('active');
			}
			if(crtHeight < targetStart || targetEnd < crtHeight){
				targetSec.removeClass('active');
			}
		})
	})
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
		slidesPerView: '2',
		spaceBetween : 40,
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

//youtube thumbnail
function vodThumb(){
    let vodThumb = $('.js_vod_thumb'),
        playurl = '',
        playHtml = '';
		
	vodThumb.on('click', function(){
        let playurl = $(this).data('target');
        playHtml = '<iframe src="https://www.youtube.com/embed/' + playurl +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        $(this).find('.youtube_box').html(playHtml);
    });
}
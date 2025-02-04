$(document).ready(function(){
	$('.js_btn_pop').length && modalPop(); // modal popup
	$('.js_interview_swiper').length && interviewSwiper(); // interview swiper
	$('.js_btn_vod_modal').length && youtubePop(); // Youtube modal popup
	$('.js_vod_thumb').length && vodThumb(); //youtube thumbnail
})

// modal popup
function modalPop(){
	const dim = $('#dim');
	const body = $('body');

	let btnPop = $('.js_btn_pop');
	let modalPop = $('.js_modal_pop');
	let btnPopClose = $('.js_pop_close');
	
	btnPop.on('click', function(){
		let target = $(this).data('target');
		let targetPop = $('#' + target);
		body.addClass('ofh');
		dim.addClass('on');
		btnPopClose.stop().show();
		modalPop.stop().show();
		targetPop.stop().fadeIn();

		return false;
	});
	$('.js_pop_close, #dim, #btn_link_academy').on('click', function(){
		body.removeClass('ofh');
		dim.removeClass('on');
		modalPop.hide();
		modalPop.children().stop().fadeOut();
	});
}

// interview swiper
function interviewSwiper(){
	let conSwiper = new Swiper('.js_interview_swiper',{
		slidesPerView: '2.2',
		spaceBetween : 40,
		loop:true,
		loopAdditionalSlides: 1,
		speed: 2000,
		centeredSlides: true,
		centeredSlidesBounds: true,
		observer: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			prevEl: '.intv_arrow .arr_prev',
			nextEl: '.intv_arrow .arr_next',
		},
	});
}

// Youtube modal popup
function youtubePop(){
	const dim = $('#dim');

	let modalPop = $('.js_vod_modal');
	let btnClose = $('.js_vod_close');

	$('.js_btn_vod_modal').on('click', function(){
		let targetData = $(this).data('video');
		const frameStart = "<iframe width='560' height='315' src='https://youtube.com/embed/";
		const frameEnd = "?autoplay=1&mute=1' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share' allowfullscreen></iframe>";

		$('body').addClass('ofh');
		dim.show();
		modalPop.find('iframe').remove();
		modalPop.addClass('active').stop().fadeIn();
		modalPop.find('.modal_vod_conbox').append(frameStart + targetData + frameEnd)

		return false;
	});
	
	btnClose.on('click', function(){
		$('body').removeClass('ofh');
		dim.hide();
		modalPop.removeClass('active').stop().fadeOut();
		modalPop.find('iframe').remove();
	});
}

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





// 전체 page load 이후 scroll Y값 받아오기 위한 onload scroll event
window.onload = function(){
	if(document.getElementById('btn_quick_form')){quickForm();} // 플로팅배너
	if(document.getElementById('btn_apply_scroll')){applyScroll();}// 의대관 신청하기
	// if(document.getElementById('btn_link_academy')){parentFormScroll();} // 온라인 학부모 입시 아카데미 - form 마감으로 인한 event 주석처리
}

// 의대관 신청하기
function applyScroll(){
	setTimeout(function(){
		let btnScroll = document.getElementById('btn_apply_scroll');
		let targetSec = document.getElementById('js_sec_form');
		let targetPoint = targetSec.getBoundingClientRect().top + window.scrollY;
	
		btnScroll.addEventListener('click', function(e){
			window.scrollTo({
				top: targetPoint + 100, 
				left: 0,
				behavior: 'smooth'
			});
		});
	}, 1000);
}

// 온라인 학부모 입시 아카데미
function parentFormScroll(){
	setTimeout(function(){
		let btnScroll = document.getElementById('btn_link_academy');
		let targetSec = document.getElementById('js_sec_form2');
		let targetPoint = targetSec.getBoundingClientRect().top + window.scrollY;

		btnScroll.addEventListener('click', function(e){
			window.scrollTo({
				top: targetPoint, 
				left: 0,
				behavior: 'smooth'
			});
		});
	}, 1000);
}

// 플로팅배너
function quickForm(){
	let btnQuick = document.getElementById('btn_quick_form');
	let targetSec = document.getElementById('js_sec_product');
	let targetPoint = targetSec.getBoundingClientRect().top + window.scrollY;

	// load 시 fade in
	let opacity = 0;
	let intervalID = 0;

	setTimeout(function(){
		intervalID = setInterval(fadeIn, 50);
	}, 0);

	// fade in
	function fadeIn(){
		opacity = Number(window.getComputedStyle(btnQuick).getPropertyValue('opacity'));
		
		if(opacity < 1){
			opacity = opacity + 0.1;
			btnQuick.style.opacity = opacity;
		}else{
			clearInterval(intervalID);
		}
	}

  // 240702 외부 신청 페이지로 이동하므로 미사용 주석처리
	// click 시 scroll to form
	// btnQuick.addEventListener('click', function(e){
	// 	window.scrollTo({
	// 		top: targetPoint - 50, 
	// 		left: 0,
	// 		behavior: 'smooth'
	// 	});
	// });
}
$(document).ready(function(){
	// $('img[usemap]').rwdImageMaps(); // image map
	$('.js_tab_menu').length && tabScroll(); // tab scroll
	$('.js_tab_wrap').length && mainMenu(); // main menu
	$('.js_acco_con').length && accodion(); // accodion
	$('.js_pop_contents').length && layerPop(); // layer popup
	$('.js_btn_copy').length && linkCopy(); // 링크복사 버튼
	$('#kakaotalk-sharing-btn').length && kakaoShare(); // 카카오톡 공유하기 버튼
})

// tab scroll event
function tabScroll(){
	$('.js_tab_menu li a').on('click', function(){
			var targetId = $(this).data('name'),
					targetSec = $('#' + targetId).offset().top,
					targetTop = targetSec;
			$('html').animate({
					scrollTop : targetTop
			}, '2000');
	});
	return false;
}

// main menu
function mainMenu(){
	// sticky menu
	$(window).scroll(function(){
			var tabMenu = $('.js_tab_wrap'),
					menuTop = tabMenu.offset().top,
					targetTop = $(window).scrollTop();
			if(menuTop < targetTop){
					tabMenu.addClass('fixed');
			}else{
					tabMenu.removeClass('fixed');
			}
	});
}

// accodion
function accodion(){
	$('.js_acco_btn').on('click', function(){
			$(this).toggleClass('on');
			$(this).next('.js_acco_con').stop().slideToggle();
			return false;
	})
}

// layer popup
function layerPop(){
	$('.js_btn_pop').on('click', function(){
			var dataName = $(this).data('name');
			$('#' + dataName).stop().fadeIn();
			$('body').addClass('ofh');
			return false;
	});
	$('.js_pop_close').on('click', function(){
			$(this).closest('.js_pop_contents').stop().fadeOut();
			$('body').removeClass('ofh');
			return false;
	})
}

// 링크복사 버튼
function linkCopy(){
	$('.js_btn_copy').on('click', function(){
			clip();
			return false;
	});

	function clip(){
			var url = '';
			var textarea = document.createElement('textarea');
			document.body.appendChild(textarea);
			url = window.document.location.href;
			textarea.value = url;
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			alert('URL이 복사되었습니다.')
	}
}

// 카카오톡 공유하기 버튼
function kakaoShare(){
	$('#kakaotalk-sharing-btn').on('click', function(){
			shareMessage();
			return false;
	});

	function shareMessage() {
			Kakao.Share.sendDefault({
					objectType: 'feed',
					content: {
							title: '2024 잇올 합격 패스타',
							description: '고생했고 대견해! 결국 해낸 너를 위해 준비했어! 잇올 합격 인증 이벤트!',
							imageUrl: 'https://www.itall.com/img/suneung/event/2024_itallpasstar/passtar_og_2024.png',
							// imageWidth: 1200,
							// imageHeight: 630,
							link: {
									mobileWebUrl: 'https://m.itall.com/suneung/event/2024_itallpasstar.asp',
									webUrl: 'https://www.itall.com/suneung/event/2024_itallpasstar.asp',
							},
					},
					buttons: [
							{
									title: '자세히 보기',
									link: {
											mobileWebUrl: 'https://m.itall.com/suneung/event/2024_itallpasstar.asp',
											webUrl: 'https://www.itall.com/suneung/event/2024_itallpasstar.asp',
									},
							},
					],
			});
	}
}
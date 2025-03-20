// cursor
$(() => {
	const cursorRounded = document.querySelector('.rounded');
	const cursorPointed = document.querySelector('.pointed');
	
	let mouseX = 0; // 마우스의 목표 X 위치
	let mouseY = 0; // 마우스의 목표 Y 위치
	let roundedX = 0; // cursorRounded의 현재 X 위치
	let roundedY = 0; // cursorRounded의 현재 Y 위치
	
	const speed = 0.15; // 느리게 따라오는 정도 (0.1은 느림, 1에 가까울수록 빠름)
	
	const moveCursor = (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	
		cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; // cursorPointed는 즉시 이동
	};
	
	const cursorAnimate = () => {
		roundedX += (mouseX - roundedX) * speed;
		roundedY += (mouseY - roundedY) * speed;
	
		cursorRounded.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;
	
		requestAnimationFrame(cursorAnimate); // 애니메이션 프레임 업데이트
	};
	
	window.addEventListener('mousemove', moveCursor);
	cursorAnimate(); // 애니메이션 시작
})

// cursor point
$(() => {
	const links = document.querySelectorAll('a');
	const cursor = document.querySelector('.cursor');

	links.forEach(link => {
		link.addEventListener('mouseover', () => {
			cursor.classList.add('hover');
		});

		link.addEventListener('mouseleave', () => {
			cursor.classList.remove('hover');
		});
	});
})

// btn top
$(() => {
	scrollTop('btn_top', 300);
	function scrollTop(elem,duration) {
		let btnTop = document.getElementById(elem);

		btnTop.addEventListener('click', function() {
			let currentY = window.pageYOffset; 
			let step = duration/currentY > 1 ? 10 : 100;
			let timeStep = duration/currentY * step;
			let intervalID = setInterval(scrollUp, timeStep);

			function scrollUp(){
				currentY = window.pageYOffset;
				if(currentY === 0) {
					clearInterval(intervalID);
				} else {
					scrollBy( 0, -step );
				}
			}
		});

		window.addEventListener('scroll', () => {
			if (window.pageYOffset === 0) {
				btnTop.style.opacity = '0';
				btnTop.style.pointerEvents = 'none';
			} else {
				btnTop.style.opacity = '1';
				btnTop.style.pointerEvents = 'auto';
			}
		});
	}
})

// gsap
$(() => {
	gsap.registerPlugin(ScrollTrigger);

	let pinStart = 180;
	let gap = 30;

	// h3 요소 고정
	document.querySelectorAll(".prj_wrap").forEach((wrap) => {
		let tit = wrap.querySelector("h3");

		if (tit) {
			ScrollTrigger.create({
				trigger: tit,
				start: "top +=50", // 뷰포트 상단에 닿을 때 고정
				endTrigger: wrap.querySelector(".prj_list_wrap"), // 해당 .prj_wrap 내 리스트 끝까지 유지
				end: "bottom bottom",
				pin: true,
				pinSpacing: false,
			});
		}
	});

	// 프로젝트 리스트 아이템 개별 핀 및 애니메이션 설정
	document.querySelectorAll(".prj_list").forEach((list) => {
		let items = list.querySelectorAll(".item");

		items.forEach((e, i) => {
			// 핀 고정
			ScrollTrigger.create({
				trigger: e,
				start: `top +=${pinStart + i * gap}`,
				endTrigger: items[items.length - 1],
				end: "top +=180",
				pin: true,
				pinSpacing: false,
			});

			// 회전 애니메이션
			gsap.to(e.querySelector(".gsap_container"), {
				rotateX: -3,
				ease: "none",
				scrollTrigger: {
					trigger: e,
					start: `top +=${pinStart + i * gap}`,
					end: "top -=30%",
					scrub: 1,
				},
			});

			// 스케일 및 밝기 감소 애니메이션
			gsap.to(e.querySelector(".gsap_container"), {
				scale: 0.2,
				filter: "brightness(0)",
				top: -200,
				ease: "none",
				scrollTrigger: {
					trigger: e,
					start: `top +=${pinStart + i * gap}`,
					end: "top -=700%",
					scrub: 1,
				},
			});
		});
	});
})
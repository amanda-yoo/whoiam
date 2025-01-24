// score count flip animation
(function(){
	window.addEventListener('touchmove', function(){
		const scoreWrap = document.getElementById('js_score_wrap');
		const txtWrap = document.getElementById('js_top_txt_wrap');

		let scoreTop = scoreWrap.getBoundingClientRect().top + window.scrollY;
		let txtTop = txtWrap.getBoundingClientRect().top + window.scrollY;
		let crtTop = document.documentElement.scrollTop;
		
		// total
		let totTargetEnd = txtTop * 0.6;
		if(crtTop < totTargetEnd){
			setupFlipTot();
		}else{
			setZeroTot();
		}

		// sub
		let subTargetEnd = txtTop * 0.7;
		if(crtTop < subTargetEnd){
			setupFlipSub1();
			setupFlipSub2();
		}else{
			setZeroSub1();
			setZeroSub2();
		}
	})

	// total
	function setupFlipTot(tick){
		const tk = document.querySelector('.total_score .tick');
		const totalCount = document.getElementById('crt_total_count');
		const maxLength = 6;
		//setInterval(function(){
			let before = tk.dataset.value;
			let current = totalCount.innerText;
			if(before < current){
				tk.dataset.value = String(current).padStart(maxLength, 0);
			}
		//}, 1000);
	}
	function setZeroTot(){
		document.querySelector('.total_score .tick').dataset.value = '000000'
	}
	
	// sub 1 - maxLength 3
	function setupFlipSub1(){
		const maxLength = 3;
		for(let i = 1;i < 3;i++){
			function setupFlip(tick){
				//setInterval(function(){
					let before = document.getElementsByClassName('tick')[i].dataset.value;
					let current = document.getElementById('crt_sub_count_' + i).innerText;
					if(before < current){
						document.getElementsByClassName('tick')[i].dataset.value = String(current).padStart(maxLength, 0);
					}
				//}, 1000);
			}
			setupFlip();
		}
	}
	function setZeroSub1(){
		for(let i = 1;i < 3;i++){
			document.getElementsByClassName('tick')[i].dataset.value = '000';
		}
	}

	// sub 2 - maxLength 4
	function setupFlipSub2(){
		const maxLength = 4;
		function setupFlip(tick){
			//setInterval(function(){
				let before = document.getElementsByClassName('tick')[3].dataset.value;
				let current = document.getElementById('crt_sub_count_3').innerText;
				if(before < current){
					document.getElementsByClassName('tick')[3].dataset.value = String(current).padStart(maxLength, 0);
				}
			//}, 1000);
		}
		setupFlip();
	}
	function setZeroSub2(){
		document.getElementsByClassName('tick')[3].dataset.value = '0000';
	}
})();

// loading 시 event
function setupFlipTot0(tick){
	const tk = document.querySelector('.total_score .tick');
	const totalCount = document.getElementById('crt_total_count');
	setInterval(function(){
		let current = totalCount.innerText;
		tk.dataset.value = String(current).padStart(6, 0);
	}, 1000);
}
function setupFlipSub1(){
	function setupFlip(tick){
		setInterval(function(){
			let current = document.getElementById('crt_sub_count_1').innerText;
			document.getElementsByClassName('tick')[1].dataset.value = String(current).padStart(3, 0);
		}, 1000);
	}
	setupFlip();
}
function setupFlipSub2(){
	function setupFlip(tick){
		setInterval(function(){
			let current = document.getElementById('crt_sub_count_2').innerText;
			document.getElementsByClassName('tick')[2].dataset.value = String(current).padStart(3, 0);
		}, 1000);
	}
	setupFlip();
}
function setupFlipSub3(){
	function setupFlip(tick){
		setInterval(function(){
			let current = document.getElementById('crt_sub_count_3').innerText;
			document.getElementsByClassName('tick')[3].dataset.value = String(current).padStart(4, 0);
		}, 1000);
	}
	setupFlip();
}
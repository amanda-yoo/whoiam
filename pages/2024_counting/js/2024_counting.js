// score count flip animation
(function(){
	const scoreWrap = document.getElementById('js_score_wrap');
	const visualWrap = document.getElementById('js_visual_wrap');
	const txtWrap = document.getElementById('js_top_txt_wrap');

    // scroll event
	window.addEventListener('scroll', function(){
		let visualTop = visualWrap.getBoundingClientRect().top + window.scrollY;
		let txtTop = txtWrap.getBoundingClientRect().top + window.scrollY;
		let crtTop = document.documentElement.scrollTop;
		let browserWidth = (window.innerWidth || self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
		// console.log('crt top : ' + crtTop + ', score top : ' + scoreTop + ', txt Top : ' + txtTop);

		// total
		if(1920 < browserWidth){ // MAC
			let totTargetStart = 0;
			let totTargetEnd = visualTop * 0.5;
            console.log(crtTop, totTargetEnd)
			
			if(totTargetStart < crtTop && crtTop < totTargetEnd){
				setupFlipTot();
			}else{
				setZeroTot();
			}
		}else{
			// let totTargetStart = scoreTop * 0.6;
			// let totTargetEnd = txtTop * 0.75;
			let totTargetStart = 0;
			let totTargetEnd = visualTop * 0.6;
			
			if(totTargetStart < crtTop && crtTop < totTargetEnd){
				setupFlipTot();
			}else{
				setZeroTot();
			}
		}

		// sub
		if(1920 < browserWidth){ // MAC
			// let subTargetStart = visualTop * 0.4;
			// let subTargetEnd = txtTop * 0.9;
			let subTargetStart = visualTop * 0.1;
			let subTargetEnd = visualTop * 0.9;
			if(subTargetStart < crtTop && crtTop < subTargetEnd){
				setupFlipSub1();
				setupFlipSub2();
			}else{
				setZeroSub1();
				setZeroSub2();
			}
		}else{
			// let subTargetStart = visualTop * 0.9;
			// let subTargetEnd = txtTop * 0.9;
			let subTargetStart = visualTop * 0.2;
			let subTargetEnd = visualTop * 0.9;
			if(subTargetStart < crtTop && crtTop < subTargetEnd){
				setupFlipSub1();
				setupFlipSub2();
			}else{
				setZeroSub1();
				setZeroSub2();
			}
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
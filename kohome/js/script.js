'use strict';
$(document).ready(function(){
		$('.vslider').bxSlider({
			mode: 'horizontal',//vertical은 수직으로 올라오는 것
			moveSlides: 1,
			slideMargin: 0,
			infiniteLoop: true,
			slideWidth: 1910,//슬라이더의 크기를 조절 할 수 있지만 width의 크기만큼이어야한다.
			minSlides: 1,//한장만 슬라이더 되는 것
			maxSlides: 1,//한장만 슬라이더 되는 것
			speed: 400,
			auto:true,
			controls:false,
		   	autoControls:false,
		    pager:false
		});//visual
			//box6 광고 슬라이드

		$('.bx6slider').bxSlider({
			mode: 'horizontal',//vertical은 수직으로 올라오는 것
			moveSlides: 1,
			slideMargin: 0,
			infiniteLoop: true,
			slideWidth: 400,//슬라이더의 크기를 조절 할 수 있지만 width의 크기만큼이어야한다.
			minSlides: 1,//한장만 슬라이더 되는 것
			maxSlides: 1,//한장만 슬라이더 되는 것
			speed: 500,
			auto:true,
			controls:false,
		    pager:true,
			autoControls:false
		});
			$('.bslider').bxSlider({
			mode: 'horizontal',//vertical은 수직으로 올라오는 것
			moveSlides: 1,
			slideMargin: 0,
			infiniteLoop: true,
			slideWidth:400,
			minSlides: 5,//한장만 슬라이더 되는 것
			maxSlides: 5,//한장만 슬라이더 되는 것
			speed: 500,
			auto:true,
			controls:false,
			pager:false

		});
			
        //탭메뉴

	var $tab_list = $('.tab');
	
	$tab_list.find('ul ul').hide(); //서브 모두감추기
	$tab_list.find('li li.active').parents('li').addClass('active');
	$tab_list.find('li.active>ul').show(); //서브 active만 보이기
	
	function listTabMenuToggle(event){
		var $this = $(this);
		
		$this.next('ul').show()
		.parent('li').addClass('active')
		.siblings('li').removeClass('active')
		.find('>ul').hide();

		if($this.attr('href') === '#'){
			return false;
		}
	}

	$tab_list.find('>ul>li>a')
	.click(listTabMenuToggle)
	.focus(listTabMenuToggle);
		

		//top
		$(window).scroll(function(){//내용이 많으니 scroll로 넣어준것
		  if ($(this).scrollTop() > 150)//#gnb 높이보다 (원래 높이가 보일때) 작으면 fixed 해제된다
		  {$('.top').addClass('on');
		  }else{$('.top').removeClass('on');
		  }
	});//top end
	// sub5 더보기



	});//js end



$(function(){



	//롤링스크립트

 

$(function(){

	var index=0;

 

	$('#area ul li:not(:first)').hide();

 

	$('#control a').click(function(){//a를 누를 때 

		index = $(this).index();

		$('#control a').removeClass('on');

		$(this).addClass('on');

		$('#area ul li:visible').stop().fadeOut();//li 보여주지 않는다.

		$('#area ul li').eq(index).stop().fadeIn();//index번호를 누른걸 보여주는 것 

		return false;

 

	});

 

	$('#LR a:last').click(function(){

		index++;

		index = index%$('#area ul li').length;

		$('#control a').eq(index).click();

		return false;

	});

 

	$('#LR a:first').click(function(){

		index--;

		$('#control a').eq(index).click();

		return false;

	});

 

	$('#control a').eq(0).click();//시작이미지 두번

	});

	


 

 //nav menu
 	$('.tmenu').click(function(){

		$('.main-nav').fadeToggle(600);	

	});

	$('.menuClose').on('click',function(){

		$('.main-nav').hide(200);

	});


    
//search

	$('.search').click(function(){

		$('.searchbox').fadeToggle(600);	

	});

 

	$('.Close').on('click',function(){

		$('.searchbox').hide();

	});

 

	//버튼 색 제거,추가

	$('.tab_menu_btn').on('click',function(){

		$('.tab_menu_btn').removeClass('on');

		$(this).addClass('on')

	});

	

	//1번 컨텐츠

	$('.tab_menu_btn1').on('click',function(){

		$('.tab_box').hide();

		$('.tab_box1').show();

	});

	//2번 컨텐츠

	$('.tab_menu_btn2').on('click',function(){

		$('.tab_box').hide();

		$('.tab_box2').show();

	});


$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});


//main contents 슬라이드
	$(document).ready(function(){
      $('.bxslider').bxSlider({
  		 pager:false,
  		 minSlides:2,
  		 maxSlides:3,
  		slideWidth:150,
  		 slideMargin:7,
		 control:true,
		 moveSlides:1
  		});
	
	 $('.bxslider2').bxSlider({
  		 pager:false,
  		 minSlides:2,
  		 maxSlides:2,
  		 slideWidth:300,
  		 slideMargin:7,
		 control:true,
		 moveSlides:1
  		});


	  });

	});
//top
$(function(){
	$(window).scroll(function(){//내용이 많으니 scroll로 넣어준것
		  if ($(this).scrollTop() > 120)//#gnb 높이보다 (원래 높이가 보일때) 작으면 fixed 해제된다
		  {$('#totop').addClass('on');
		  }else{$('#totop').removeClass('on');
		  }
	});


});
   


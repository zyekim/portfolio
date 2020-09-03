$(function(){
		 //gnb fullmenu
		
		var headerA = $('#gnb');
		var headerB = $('.glist > ul ');
		var headerHeight = headerB.outerHeight();

		headerB.mouseenter(function(){
	    $('#header').css('background','#fff');
	    $('#gnb').css('background','#fff');
		 var subHeight = $(this).find('ul').outerHeight();
		 headerA.stop().animate({height:'350px'},300);

		}).mouseleave(function(){
         $('#header').css('background','rgba(250,250,250,0.9)');
	    $('#gnb').css('background','none');
		 headerA.stop().animate({height: headerHeight + 'px'},300);
	
		});//fullmenu end

		//top
		$(window).scroll(function(){//내용이 많으니 scroll로 넣어준것
		  if ($(this).scrollTop() > 150)//#gnb 높이보다 (원래 높이가 보일때) 작으면 fixed 해제된다
		  {$('.top').addClass('on');
		  }else{$('.top').removeClass('on');
		  }
	});
});
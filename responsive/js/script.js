 $(function(){
             //m_gnb open & close
			 $('.mg_btn').click(function(){
  
				$('.mgnb').stop().animate({'left':'0'},500,'swing');
				$('.mgnb').css('background','rgba(10,10,10,0.6)')
			  
			  });
			  $('.close').click(function(){
				
				$('.mgnb').stop().animate({'left':'-100%'},500,'swing');
			  
			  });

			//fullmenu
			  var headerA = $('#gnb');
			  var headerB = $('.glist > ul ');
			  var headerHeight = headerB.outerHeight();
			  
			  headerB.mouseenter(function(){
			  
			  $('#gnb').css('background','#fff');
			   var subHeight = $(this).find('ul').outerHeight();
			   headerA.stop().animate({height:'260px'},300);
			  
			  }).mouseleave(function(){
			  
			  $('#gnb').css('background','none');
			   headerA.stop().animate({height: headerHeight + 'px'},300);
			  
			  });//fullmenu end

			


  });//js end
   
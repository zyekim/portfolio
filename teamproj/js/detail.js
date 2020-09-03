/* //gnb 클릭 
$(function(){
$('.nav').css({
'margin-right':'-400px','opacity':'0'},500,'linear').removeClass('on');
$('.gnb').click(function(){
if($('.nav').hasClass('on')){$('.nav').animate({'margin-right':'-400px','opacity':'0'},500,'linear').removeClass('on');}
else{$('.nav').animate({'margin-right':'0','opacity':'1'},500,'linear').addClass('on');}
});
}); */

// header 
$(function(){
$('.tmenu').click(function(){
		$('.main-nav').fadeToggle(600);	
	});
	$('.menuClose').on('click',function(){
		$('.main-nav').hide();
	});
});

$(function(){

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
})
	


//하단부 클릭 toggle

$(function(){
$('.top_btn').click(function(){
$('#option_open').css('display','block');
$('#footer').css('margin-bottom','210px');
})
});

$(function(){
$('.bottom_btn').click(function(){
$('#option_open').css('display','none');
$('#footer').css('margin-bottom','60px');
})
});



//visual img click control
$(function () {
 var index=0;

 $('#area ul li:not(:first)').hide();

$('#control a').click(function(){
  index = $(this).index();
   $('#control a').removeClass('on');
   $(this).addClass('on');
   $('#area ul li:visible').stop().fadeOut();
   $('#area ul li').eq(index).stop().fadeIn();
   return false;
});


$('#control a').eq(0).click(); //시작이미지 1번

});

//총 합계 금액

  function comma(num){
    var len, point, str;  
       
    num = num +"" /*"" - 문자열화*/;  
    point = num.length % 3 /* 3 나누기 eg) 3,000*/ ;  2,860,000,
    len = num.length;  
   
    str = num.substring(0, point);  
    while (point < len) {  
        if (str != "") str += ",";  
        str += num.substring(point, point + 3);  2,860,000
        point += 3;  
    }  
     
    return str;
 
   }

var sell_price;
var amount;

function init () {
	sell_price = document.form.sell_price.value;
	amount = document.form.amount.value;
	document.form1.sum.value = sell_price;
	change();
}

function add () {
	hm = document.form.amount;
	sum = document.form1.sum;
	hm.value ++ ;

	sum.value = comma(parseInt(hm.value) * sell_price);
}

function del () {
	hm = document.form.amount;
	sum = document.form1.sum;
		if (hm.value > 1) {
			hm.value -- ;
			sum.value = comma(parseInt(hm.value) * sell_price);
		}
}

function change () {
	hm = document.form.amount;
	sum = document.form1.sum;

		if (hm.value < 0) {
			hm.value = 0;
		}
	sum.value = comma(parseInt(hm.value) * sell_price);


}  




//visual img slide swipe
$(document).ready(function () { 
	//initialize swiper when document ready 
	var mySwiper = new Swiper ('.swiper-container', { 
		// Optional parameters 
		direction: 'vertical', 
		loop: true });
			});
//https://swiperjs.com/





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

	
	 $('.bxslider3').bxSlider({
  		 minSlides:1,
  		 pager:false,
  		 slideWidth:300,
		 moveSlides:1
  		});


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



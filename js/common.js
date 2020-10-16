new fullpage('#fullpage',{
    menu:'#menu',
    anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage','6thPage','7thPage'],
    navigationTooltips: ['MAIN', 'SKILL', '#01','#02','#03','#04','CONTACT'],
    autoScrolling:true,
    navigation:true,
    onLeave:(origin,destination,direction)=> {
        const section = destination.item ;
        //console.log(destination.item);        
        const title = section.querySelector('h1');
        const tl =  new TimelineMax({ delay: 0.5 });
		    tl.fromTo(title, 0.5 ,{y: '50',opacity:0},{y:"0",opacity:1})

          if (destination.index === 1){
			
           function progressBar(target,value){//target="progress0"
            var target = "#" + target;
            //console.log(target+"/"+value);
            var total_w = $(".progress").width();
            //console.log(total_w)
            var now_w = (total_w*value)/100;
            //console.log(target + " .progress .bar")
            $(target + " .progress .bar").animate({width:now_w},1000,"swing");      
              return false;
            };
       
    
            var v=[];
            var pn=0;
            $(".pro .bar_txt").text(function(index,value){
                 v[index] = value;
				 return value;
            })
            var progress = setInterval(function(){
               progressBar("progress"+pn,v[pn]); 
               pn++;
               if(pn > $(".pro .bar_txt").length-1){
                 clearInterval(progress);
               }
            },250)  
		
       

        //console.log(v);
	
          }


		  
		    
		  
        }//onLeave
      });//fullpage
   

      $(function(){
			
		 $(".pro .bar_txt").after('<span>%</span>');
        
     })
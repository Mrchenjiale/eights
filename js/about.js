
$(function(){
    var index=0;
    $(".nav .nav-r li").hover(function(){
      index=$(this).index();
        $(".nav .nav-r span").stop().css({left:120*index},0);
        $(this).find("a").addClass("focus").parent().siblings().find("a").removeClass("focus");
    },function(){
        $(".nav .nav-r span").stop().css({left:600});
        $(".nav .nav-r li").find("a").eq(5).addClass("focus").parent().siblings().find("a").removeClass("focus");
        });

//-----------------------------------banner轮播
    var time=0;
    setInterval(function(){
                console.log(time);
                if(time==2){
                    time=0;  
                }
                $(".banner ul li").eq(time).css({opacity:1}).siblings().css({opacity:0});
                time++;
            },3000);
//-----------------------------------发展历程
	//-----------------------------------发展历程时间表table
    $(".development .schedule ul li").click(function(){
    	index=$(this).index();
    	$(".development .schedule ul").animate({left:510-170*index});
        $(".development .out").animate({left:-1200*index});
        // $(".development .content .out>li").css({top:0});	
    	$(this).addClass("focus").siblings().removeClass("focus");
    });
	//-----------------------------------发展历程内容高度获取
	// var num=$(".development .content .in>li").length;
	// if(num%2==1){
	// 	$(".development .content .out>li").css({height:(num/2)*210+(num/2-1)*120+75});
	// }else{
	// 	$(".development .content .out>li").css({height:(num/2)*210+(num/2-1)*120+260});
	// }
	//-----------------------------------发展历程内容切换button
    var i=0;
    $(".development .content .prev").click(function(){
        i+=330;
        if (i>=0){
            i=0;
            $(".development .content .out>li").animate({top:0});
        }else{
        $(".development .content .out>li").animate({top:i});
    }
    });
    $(".development .content .next").click(function(){
        var h=$(".development .content .out li").height();
          i-=330;
          if (i<=-h+750){
            i=-h+750;
            $(".development .content .out>li").animate({bottom:0});
        }else{
        $(".development .content .out>li").animate({top:i});
    }
    });
        // //-------------------------------------切换buttom停止动画
        // $(".box-out .prev").hover(function(){
        //     $(this).removeClass("jump1");
        // },function(){
        //     $(this).addClass("jump1");
        // });
        // $(".box-out .next").hover(function(){
        //     $(this).removeClass("jump2");
        // },function(){
        //     $(this).addClass("jump2");
        // });
//-------------------------------------------滚动加载
        $(document).scroll(function(){
            var T=$("body").scrollTop()||$("html").scrollTop();
            var t1=$(".middle").offset().top,t2=$(".mlogo").offset().top,t3=$(".development").offset().top;
            if (T>(t1-600)&&T<(t1+170)){
                $(".middle .showy ul li").addClass("show");
                $(".middle .showy span").addClass("on");
             }
            if (T>(t2-700)&&T<(t2+170)){
                $(".mlogo ul li").addClass("on");
            }else{
                $(".mlogo ul li").removeClass("on");
            }
            if (T>(t3-250)){
                $(".development .content .in li").addClass("on");
                $(".development .content .in li a i").css({visibility:"visible"});
            }
        });
});
$(function(){
      var index=0;
    $(".nav .nav-r li").hover(function(){
      index=$(this).index();
        $(".nav .nav-r span").stop().css({left:120*index},0);
        $(this).find("a").addClass("focus").parent().siblings().find("a").removeClass("focus");
    },function(){
        $(".nav .nav-r span").stop().css({left:120});
        $(".nav .nav-r li").find("a").eq(1).addClass("focus").parent().siblings().find("a").removeClass("focus");
        });
    
    $(".main .left .table .ul02").eq(0).siblings(".ul02").hide();
    $(".main .left .ul01>li").hover(function(){
    var i=$(this).index();
    $(".main .left .table .ul02").eq(i).fadeIn().siblings().fadeOut();
   });
    $(".main .left .ul01 li").hover(function(){
        $(this).addClass("fours").siblings().removeClass("fours");s
    })



    var clone=$(".main .right .fr01 ul li").eq(0).clone();
      $(".main .right .fr01 ul").append(clone);
      var i=0;
    setInterval(function(){
      i++;
      if(i==4){
        $(".main .right .fr01 ul").css({left:0});
        i=1;
      }
      $(".main .right .fr01 ul").eq(0).animate({left:-291})  
    },2000);

    $(function(){
    $(".news-column .left ").mouseenter(function(){
        $(".news-column .left img").animate({marginTop:-55});
    }).mouseleave(function(){
        $(".news-column .left img").animate({marginTop:30});
    });
  });

})
$(function(){
      var index=0;
    $(".nav .nav-r li").hover(function(){
      index=$(this).index();
        $(".nav .nav-r span").stop().css({left:120*index},0);
        $(this).find("a").addClass("focus").parent().siblings().find("a").removeClass("focus");
    },function(){
        $(".nav .nav-r span").stop().css({left:360});
        $(".nav .nav-r li").find("a").eq(3).addClass("focus").parent().siblings().find("a").removeClass("focus");
        });

        setInterval(function(){
            $(".special ul").animate({top:-30},1000,function(){
                $(this).find("li").first().appendTo(this);
                $(this).css({top:0});
            });
        },2000);
    });
$(function(){
 $(".news .news-left .title  p:nth-child(3)").hover(function(){
            $(this).find(".overlay").slideToggle();
            $(this).find(".over").slideToggle();
         });
   });
$(function(){
    $(".news-column .left ").mouseenter(function(){
        $(".news-column .left img").animate({marginTop:-50});
    }).mouseleave(function(){
        $(".news-column .left img").animate({marginTop:30});
    });
});

    $(function(){
        $(".news .news-left .title p:nth-child(5) img").click(function(){
            $(".news .news-left .title p:nth-child(5) .overlay").show();
            var src=$(this).find("img").attr("src");
            $(".news .news-left .title p:nth-child(5) .pop").find("img").attr("src",src).parent().show();
            var W=$(".news .news-left .title p:nth-child(5) .pop img").width();
            var H=$(".news .news-left .title p:nth-child(5) .pop img").height();
            $(".news .news-left .title p:nth-child(5) .pop").css({marginTop:-H/2,marginLeft:-W/2});
            $(".news .news-left .title p:nth-child(5) .pop a").click(function(){
            $(".news .news-left .title p:nth-child(5) .overlay").fadeOut();
            $(".news .news-left .title p:nth-child(5) .pop").fadeOut();
        });
        });
    });
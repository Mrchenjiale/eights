
// tab选项卡 开始
$(function(){
       $(".video .video-left").eq(0).show().siblings(".video-left").hide();
       $(".video ul li").hover(function(){
          var i=$(this).index();
          $(".video .video-left").eq(i).show().siblings(".video-left").hide();
          
       });
   });


$(function(){
        var index=0;
    $(".nav .nav-r li").hover(function(){
      index=$(this).index();
        $(".nav .nav-r span").stop().css({left:120*index},0);
        $(this).find("a").addClass("focus").parent().siblings().find("a").removeClass("focus");
    },function(){
        $(".nav .nav-r span").stop().css({left:240});
        $(".nav .nav-r li").find("a").eq(2).addClass("focus").parent().siblings().find("a").removeClass("focus");
        });
})






// content内容 i标签图片的背景切换
$(function(){
    $(".content .content-left").mouseenter(function(){
        $(".content .content-left a").stop().animate({marginTop:-40});
    }).mouseleave(function(){
        $(".content .content-left a").stop().animate({marginTop:0});
    });
});



// 右边图片特效 开始

$(function(){
        $(".layout-1 .new li").hover(function(){
            $(this).find(".overlay").stop().slideToggle();
           

        });
    });





























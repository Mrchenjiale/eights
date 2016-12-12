$(function(){
  //-----------------头部开始
        var index=0;
    $(".nav .nav-r li").hover(function(){
      index=$(this).index();
        $(".nav .nav-r span").stop().css({left:120*index},0);
        $(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
    },function(){
        $(".nav .nav-r span").stop().css({left:0});
        $(".nav .nav-r li").find("a").eq(0).addClass("active").parent().siblings().find("a").removeClass("active");
        });

    
  $(".introduct-2 ul li a").hover(
      function () {
        $(this).addClass("bg").parent().siblings().children("a").removeClass("bg");
        $(this).find(".pic-1").stop().animate({right: -94},400);
        $(this).find(".pic-2").stop().animate({left: 78},400);
        $(this).find(".txt-1").stop().animate({left: -120},400);
        $(this).find(".txt-2").stop().animate({right:58},400);   
    }, 
      function () {
      $(this).find(".pic-1").stop().animate({right:78},400);
        $(this).find(".pic-2").stop().animate({left:-96},400);
        $(this).find(".txt-1").stop().animate({left:58},400);
        $(this).find(".txt-2").stop().animate({right:-120},400); 
      }
  );
        $(document).scroll(function(){
            
             var T=$("body").scrollTop()||$(document).scrollTop();
             var d1=$(".content").offset().top-600;
             if (T>d1){ 
                $(".content .introduct ul li").addClass("active");
             }
             if(T<d1||T>d1+1100){
                $(".content .introduct ul li").removeClass("active");
             }             
        });
//----------左侧按钮
    $(".box").hover(function(){
      $(".box").removeClass("box-move")
     $(".border-1").css({ transform:"rotateZ(225deg)",top:28});
     $(".border-2").css({ opacity:0});
     $(".border-3").css({ transform:"rotateZ(-225deg)",bottom:28});
     $(".box-2 p").animate({left:-41});  
    },function(){
       $(".box").addClass("box-move")
        $(".border-1").css({ transform:"rotateZ(0deg)",top:12})
        $(".border-2").css({ opacity:1})
         $(".border-3").css({ transform:"rotateZ(0deg)",bottom:12});
        $(".box-2 p").animate({left:146});     
    })
    $(document).scroll(function(){
            var w=$("body").scrollTop()||$(document).scrollTop(); 
                if (w>400){
                    $(".box").fadeIn();
                }else{
                    $(".box").fadeOut();
                }
            });
        $(".box-2 .box-2-4").click(function(){
        $("html,body").animate({scrollTop:0})||$(document).animate({scrollTop:0});
        });
        var size=$(".box-2 p").size();
				size1=size-1;
        for(var i=0;i<size1;i++){
            $(".box-2 p").eq(i).click(function(){
                var index=$(this).index();
                var m=$(".d"+index).offset().top-200;
                $("html,body").animate({scrollTop:m})||$(document).animate({scrollTop:m});
                
            });
        }
        
    // ---------------轮播
     var b=0


    function move(){
        if(b==3){
          $(".banner .banner1 .banner-1-1").eq(0).fadeIn().siblings().fadeOut();
          $(".banner .btn span").eq(0).addClass("focus").siblings().removeClass("focus");
          b=0;
          }else {
             $(".banner .banner1 .banner-1-1").eq(b).fadeIn().siblings().fadeOut();
             $(".banner .btn span").eq(b).addClass("focus").siblings().removeClass("focus");
          }
    }
    var d=setInterval(function(){
            b++;
            move();           
        },8000); 
//---------------鼠标经过banner,停止定时器
  $(".banner").hover(function(){
            clearInterval(d);
        },function(){
            d=setInterval(function(){
              b++;
              move();           
           },6000);       
        });
        //---------------------------------------------------单击按钮
     $(".banner .btn span").click(function(){
         var index=$(this).index();
         $(".banner .banner1 .banner-1-1").eq(index).fadeIn().siblings().fadeOut();
          b=index;
         $(".banner .btn span").eq(b).addClass("focus").siblings().removeClass("focus"); 
      });
     
  //-----------单击“上一个” “下一个”按钮时
          $(".banner .prev").click(function(){
            b--;
            if (b<0){b=0}
            move();
        });
        $(".banner .next").click(function(){
            b++;
            move();
        });

});
   
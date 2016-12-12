
   
window.onload=function(){
    var input=document.getElementById("input").children;
    for(var i=0;i<input.length;i++){
        var valu=""
    input[i].onclick=function(){
        valu=this.placeholder;
        this.placeholder="";
    }
    input[i].onblur=function(){
        this.placeholder=valu;
    }
}
}
$(function(){
    var index=0;
    $(".nav .nav-r li").hover(function(){
      index=$(this).index();
        $(".nav .nav-r span").stop().css({left:120*index});
        $(this).find("a").addClass("focus").parent().siblings().find("a").removeClass("focus");
    },function(){
        $(".nav .nav-r span").stop().css({left:480});
        $(".nav .nav-r li").find("a").eq(4).addClass("focus").parent().siblings().find("a").removeClass("focus");
        });
  });
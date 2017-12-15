$(function(){
    var head=$("#header1");
    window.addEventListener("touchmove",function(e){
        var newtop=$("#header").offset().top;
        if (newtop<=0){
            head.css({display:"block"});
        }else{
            head.css({display:"none"});
        };
    })
    window.addEventListener("touchend",function(e){
        var newtop=$("#header").offset().top;
        if (newtop<=0){
            head.css({display:"block"});
        }else{
            head.css({display:"none"});
        };
    })



    var div=document.querySelector(".zui_big_box");
    div.addEventListener("touchstart",function(e){
        var oldleft= e.changedTouches[0].clientX;
        var left=div.offsetLeft;
        //console.log(left);
        div.addEventListener("touchmove",function(e){
            var newleft= e.changedTouches[0].clientX;
            var lefts=newleft-oldleft;
            div.style.left=lefts+left+"px";
            var left1=div.offsetLeft;
            //console.log(left1);
            div.addEventListener("touchend",function(e){
                if (left1>=66){
                    div.style.left=66+"px";
                }else if(left1<= - 300){
                    div.style.left= - 300+"px";
                }else {
                    div.style.left=lefts+left+"px";
                }
            })
        })
    })
})

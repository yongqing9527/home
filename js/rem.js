(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=320){
                  // 这里的640 取决于设计稿的宽度
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        recalc();
        //doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// $(function(){
//     var clienW=document.documentElement.clientWidth;
//     var originW=750;
//     //设计尺寸
//     var bili=clienW/originW*100+"px";
//     document.querySelector("html").style.fontSize=bili;
// })


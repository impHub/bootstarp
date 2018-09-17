$('.navigation a').on('click',function(){
    $('html,body').animate({
        // 在锚点跳转过程中加上动画
        scrollTop:$($(this).attr('href')).offset().top  + 'px'
    },500)
    //取消默认事件,不让刷新页面
    return false;
})
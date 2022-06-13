import $ from 'jquery'
$(function(){
                let width = $(window).width()
                let height = $('.nnr').height()
                console.log(width);
                if(width>500){
                let about = height+500
                $('.about').css('top',about)
            } else {
                    let about = height + 470
                    $('.about').css('top', about)
                }
            })
// 手机端
$(function(){
    // 手机端菜单按钮
    $('#click').click(function(){
        if($('.menushow').is(':hidden')){
            $('.menushow').fadeIn(500)
            $('#click').attr('src','../icon/叉叉.png')
        } else {
            $('.menushow').fadeOut(500)
            $('#click').attr('src','../icon/menu.png')
        }
    })
})

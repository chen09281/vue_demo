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
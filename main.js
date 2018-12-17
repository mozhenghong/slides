$(function(){
    var $images = $('.images img')
    var $first = $images.eq(0).clone(true)
    var $last = $images.eq($images.length-1).clone(true)
    $('.images').append($first)
    $('.images').prepend($last)
    var $button = $('.buttons button')
    var index = 0
    var current = 0
    $button.on('click',function(e){
        index = $(e.currentTarget).index()
        slides(index)   
    })
    $('#pre').on('click',function(){
        slides(current-1)
    })
    $('#next').on('click',function(){
        slides(current+1)
    })
    var timer = setInterval(function(){
        slides(current+1)
    },2000)
    $('.wrapper').on('mouseenter',function(){
        console.log('1')
        clearInterval(timer)
    })
    $('.wrapper').on('mouseleave',function(){
        console.log('2')
        timer = setInterval(function(){
            slides(current+1)
        },2000)
    })
    function slides(index){
        if(index>$button.length-1){
            index =0
        }else if(index<0){
            index =$button.length-1
        }
        if( current===$button.length-1 && index ===0){
            console.log(($button.length)*(-300))
            $('.images').css({transform: `translateX(${($button.length+1)*(-300)}px)`})
            .one('transitionend',function(){
                $('.images').hide()
                $('.images').offset()
                $('.images').css({transform: `translateX(${(-300)}px)`}).show()
            })
        }else if(current ===0 && index ===$button.length-1){
            $('.images').css({transform: `translateX(0px)`})
            .one('transitionend',function(){
                $('.images').hide()
                $('.images').offset()
                $('.images').css({transform: `translateX(${($button.length)*(-300)}px)`}).show()
            })
        }else{
            $('.images').css({transform: `translateX(${(index+1)*(-300)}px)`})
        }
        current=index
    }

})
$(function(){

    $('.bottbtn').each(function(i){
        $(this).data('index',i);
    })
    var flag = true ;
    $('.bottbtn').click(function(){
        var index = $(this).data('index');
        $('.son').finish();
        if(flag){
            $('.bottbtn').hide();
            $($('.bottbtn')[index]).slideToggle(200);
            flag = false ;
        }else{
            $('.bottbtn').show();
            flag = true ;

        }
        $($('.son')[index]).slideToggle(200);
    });

    $('.banner-s').each(function(i){
        $(this).data('index',i);
    })
    $('.botton-ban').each(function(i){
        $(this).data('index',i);
    })
    var index = 0 ;
    var flay = function(){
        if(index==4){
            index=0;
            $('.big-ban').css({'margin-left':'0px'});
            return ;
        }
        var left = -index*$('.img-banner').width();
        $('.big-ban').animate({'margin-left':left+'px'},1000);
       changecolor(index);
        index++;
    };
    var changecolor = function(index){
        $('.botton-ban').removeClass('cashi');
        if(index==3){
            $($('.botton-ban')[0]).addClass('cashi');
        }else{
            $($('.botton-ban')[index]).addClass('cashi');
        }

    }
    //var time = setInterval(flay,1500);
    //$('.banner-s').mouseenter(function(){
    //    clearInterval(time);
    //});
    //$('.banner-s').mouseleave(function(){
    //    time = setInterval(flay,1500);
    //})
    $('.botton-ban').click(function(){
        //clearInterval(time);
        var index = $(this).data('index');
        var left = -index*100+"%" ;
        changecolor(index);
        console.log(left);
        $('.big-ban').animate({'margin-left':left},1000);
    })




    $('.insert p').each(function(i){
        $(this).data('index',i);
    })
    $('.insert p').click(function(){
        $('.foot_m').finish();
        var index = $(this).data('index');
        for(var i = 0 ; i< $('.foot_m').length ; i++ ){
            if( i != index){
                $($('.foot_m')[i]).hide();
            }else{
                $($('.foot_m')[i]).slideToggle(200);
            }
        }
    });

    var angle = 0;
    touch.on('#app2', 'touchstart', function(ev){
        ev.startRotate();
        ev.preventDefault();
    });

    touch.on('#app2', 'rotate', function(ev){
        var totalAngle = angle + ev.rotation;
        if(ev.fingerStatus === 'end'){
            angle = angle + ev.rotation;
        }
        this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
    });

    touch.on(document,"hold",function(){
        alert(1);
    })


    var margin;
    touch.on(".big-ban","dragstart",function(e){
        margin = $(".big-ban")[0].offsetLeft;
    })
    touch.on(".big-ban","drag",function(e){
        margin = margin + e.x;
        $('.big-ban').css({'margin-left': margin});
    })
    touch.on(".big-ban","dragend",function(e){
        if(Math.abs(e.x)>=300 || e.factor<5){
            if(e.direction == "left" ){
                index++;
                if(index==4){
                    index=0;
                    $('.big-ban').animate({'margin-left':'0px'},200);
                    return ;
                }
                var left = -index*100+"%";
                $('.big-ban').animate({'margin-left':left},200);
                changecolor(index);
            }else if(e.direction == "right"){
                index--;
                if(index==-1){
    
                    index=0;
                    $('.big-ban').animate({'margin-left':'0px'},200);
                    return;
                }else{
                    if(index==4){
                        index=0;
                        $('.big-ban').animate({'margin-left':'0px'},200);
                        return ;
                    }
                    var left = -index*100+"%";
                    $('.big-ban').animate({'margin-left':left},200);
                    changecolor(index);
                }
                changecolor(index);
            }
            }else{$('.big-ban').animate({'margin-left':'0px'});}
        console.log(index,"12121");
    })


    $(".big-ban").mousedown(function(e){
        e.preventDefault();
    })

})
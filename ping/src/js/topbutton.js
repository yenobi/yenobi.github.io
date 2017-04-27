'use strict';

(function(window, document, undefined){
        $(window).scroll(function(){
                if($(this).scrollTop() > 450) {

                        $('.to-top').addClass('to-top-show');
                };

                if($(this).scrollTop() < 450) {
                        $('.to-top').removeClass('to-top-show');
                };

                $('.to-top-show').click(function(){
                        // вот эта строка не блокирует скролл при возврате, 
                        // но вверх не плавный скролл 
                //        $('body').scrollTop(0);

                // не могу понять, в чем здесь может быть ошибка 
                        $('body').animate({
                                scrollTop: 0
                        }, 1000);

                });
        });
})(window, document, undefined);

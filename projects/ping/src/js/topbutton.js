'use strict';

(function(window, document, undefined){
        $(window).scroll(function(){
                if($(this).scrollTop() > 450) {

                        $('.to-top').addClass('to-top-show');
                };

                if($(this).scrollTop() < 450) {
                        $('.to-top').removeClass('to-top-show');
                };
          });
})(window, document, undefined);

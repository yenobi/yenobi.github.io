'use strict';

// need to animate toggleClass - how? 
// Transition didnt work

(function(window, document, undefined) {

        $('a.active').click( function() {
                $('.header-nav').toggleClass('header-popup');
                // не получается сделать анимацию для появления меню
                // $('.header-nav-popup').animate({
                //         opacity: 0.9
                // }, 1000);

                // вторая попытка была такая 
                // $('.header-nav-popup').fadeIn('slow');
                // тоже не работает
          } );


})(window, document, undefined);

// can i delete this event depend on media queries? 
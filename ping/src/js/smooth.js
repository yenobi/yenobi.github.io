(function(window, document, undefined){
  'use strict';


  $('.to-top').bind('click', function() {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
  })

  $('.header-nav a').bind('click', function () {
       $('html, body').stop().animate({
           scrollTop: $($(this).attr('href')).offset().top
       }, 1500, 'easeInOutExpo');
       event.preventDefault();
   });

   $('.footer-nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

})(window, document, undefined);

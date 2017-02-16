(function($, undefined) {
  $('.jcarousel').jcarousel();

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  $('.jcarousel-pagination').jcarouselPagination({
     item: function(page) {
         return '<a href="#' + page + '">' + page + '</a>';
     }
   });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });

})(jQuery);

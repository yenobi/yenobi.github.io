$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

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
});

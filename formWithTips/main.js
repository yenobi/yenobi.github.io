(function($, undefined) {

  $('button').on('click', function() {
    $('.tip').toggleClass('showTip');
  });

  $('label').hover( function(e) {
    var self = e.target;
    if (self.tagName === 'INPUT') {
      switch (self.id) {
        case 'firstName':
          $('#firstTip').toggleClass('showTip');
          break;
        case 'lastName':
          $('#surnameTip').toggleClass('showTip');
          break;
        case 'adress':
          $('#adressTip').toggleClass('showTip');
          break;
      }
    }
  });

})(jQuery);

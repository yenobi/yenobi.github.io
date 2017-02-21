(function($, undefined) {
  var $buttons = $('#portfolio .wrapper-buttons button');
  console.log($buttons);
  var buttons = $.makeArray($buttons);
  var $contents = $('.wrapper-testimonal');
  showContent();

  $('.wrapper-buttons').on('click', function(event) {
    console.log('1');
    showContent();
    $('.active').toggleClass('active');
    $(event.target).toggleClass('active');
    showContent();
  });

  function showContent() {
    var activeButton = $('.active')[0];
    console.log(activeButton);
    var index = buttons.indexOf(activeButton);
    var $activeContent = $($contents[index]);
    $activeContent.toggleClass('displayNone');
  };
})(jQuery);

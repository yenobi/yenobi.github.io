(function($, undefined) {
// можно как-то в одно действие это сделать?
var $buttons = $('button');
var buttons = $.makeArray($buttons);
var $contents = $('.panel-body');

showContent();

$('.panel-heading').on('click', function(event) {
  showContent();
  $('.active').toggleClass('active');
  $(event.target).toggleClass('active');
  showContent();
});

// change content according to active
function showContent() {
  var activeButton = $('.active')[0];
  var index = buttons.indexOf(activeButton);
  var $activeContent = $($contents[index]);
  $activeContent.toggleClass('displayNone');
}
})(jQuery);

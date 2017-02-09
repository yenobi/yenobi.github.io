'use strict'

$(function() {
 var $links = $('nav a');
 $links.on('click', function(e) {
   e.preventDefault();
   var $submenu = $(this).siblings('ul.submenu');
   $submenu.slideToggle();
 });
});

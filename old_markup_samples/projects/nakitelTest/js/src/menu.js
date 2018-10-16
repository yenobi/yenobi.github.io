document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var headerNav = document.querySelector('.header-nav');

  menuIcon.addEventListener('click', function() {
    headerNav.classList.toggle('shown');
  });
});

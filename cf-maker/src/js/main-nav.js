(function(window, document, undefined) {
'use strict';
    let header = document.querySelector('.page-header');
    let toggler = header.querySelector('.page-header__nav-toggler');
    let close = header.querySelector('.main-nav__cross');
    
    toggler.addEventListener('click', toggleMenu);
    close.addEventListener('click', toggleMenu);
    
    function toggleMenu(e) {
      header.classList.toggle('page-header_dropdown'); 
      e.preventDefault();  
    };
    
})(window, document, undefined);

//header.getBoundingClientRect().top > 0
//this is for cup on first-screen and opened nav
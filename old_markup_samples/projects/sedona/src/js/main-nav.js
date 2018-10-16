(function(window, document, undefined) {
    'use strict';
    
    let header = document.querySelector('.page-header');
    let toggler = header.querySelector('.main-nav__hamb');
    let nav = header.querySelector('.main-nav');

    toggler.addEventListener('click', toggleMenu);
    nav.addEventListener('click', toggleMenu);
    
    function toggleMenu() {
       header.classList.toggle('page-header_nav-open');
        toggler.classList.toggle('main-nav__hamb_nav-opened');
    };
    
})(window, document, undefined);
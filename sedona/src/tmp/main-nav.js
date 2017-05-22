'use strict';

(function (window, document, undefined) {
    'use strict';

    var header = document.querySelector('.page-header');
    var toggler = header.querySelector('.main-nav__hamb');
    var nav = header.querySelector('.main-nav');

    toggler.addEventListener('click', toggleMenu);
    nav.addEventListener('click', toggleMenu);

    function toggleMenu() {
        header.classList.toggle('page-header_nav-open');
        toggler.classList.toggle('main-nav__hamb_nav-opened');
    };
})(window, document, undefined);
'use strict';

(function (window, document, undefined) {
    'use strict';

    var header = document.querySelector('.page-header');
    var toggler = header.querySelector('.main-nav__toggler');
    var nav = header.querySelector('.main-nav');
    var cross = nav.querySelector('.main-nav__cross');

    toggler.addEventListener('click', toggleMenu);
    cross.addEventListener('click', toggleMenu);

    nav.addEventListener('click', hideAfterClick);

    function toggleMenu() {
        nav.classList.toggle('main-nav_opened');
    };

    function hideAfterClick(e) {
        if (e.target.tagName === 'A') {
            toggleMenu();
        }
    }
})(window, document, undefined);
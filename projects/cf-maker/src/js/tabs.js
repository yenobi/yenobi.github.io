(function(window, document, undefined) {
'use strict';
    
    let tab__wrapper = document.querySelector('.js-tab__wrapper');

    let controls = tab__wrapper.querySelectorAll('.js-tabs__list-item');    
    let controlsArray = Array.prototype.slice.call(controls);
    
    let controls__list = tab__wrapper.querySelector('.js-tabs__list');
    
    let content = tab__wrapper.querySelectorAll('.js-tabs__content');
    let contentArray = Array.prototype.slice.call(content);
   
//    to show first one
    showContent();
    
    controls__list.addEventListener('click', toggle_and_show);
    
    function toggle_and_show(e) {
        if(e.target.tagName != 'A') return;
//        hide non-active content
        showContent();
//        toggle active clss
        let last_url = tab__wrapper.querySelector('.js-tabs__list-item_active');
        last_url.classList.toggle('js-tabs__list-item_active');
        
//        add class to new 
        let new_url = e.target;
        new_url.classList.toggle('js-tabs__list-item_active');
        showContent();
    }
    
    function showContent() {
        let active = tab__wrapper.querySelector('.js-tabs__list-item_active');
        
        let index = controlsArray.indexOf(active);
        let active_content = contentArray[index];
        active_content.classList.toggle('js-hidden');
    };
    
    
})(window, document, undefined);

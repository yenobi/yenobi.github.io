(function(window, document, undefined) {
'use strict';
const body = document.querySelector('body');
    
const moveTo = new MoveTo({
    tolerance: 40,
     duration: 800,
    easing: 'easeOutQuart'
});
    
let headerNavArray = Array.from(body.querySelectorAll('.main-nav__list-item'));
    
headerNavArray.forEach(function(item) {
        
    item.addEventListener('click', function(e) {
            
        moveTo.move(body.querySelector(
            item.getAttribute('href')));
            
            e.preventDefault();  
        });
    }); 
    
let logo = body.querySelector('.page-header__logo-wrapper');
    
    logo.addEventListener('click', (e) => {
        moveTo.move(body.querySelector(
            logo.getAttribute('href')));
        
        e.preventDefault();
    })
       
})(window, document, undefined);

(function(window, document, undefined) {
'use strict';
const body = document.querySelector('body');
    
const moveTo = new MoveTo({
     duration: 800,
    easing: 'easeOutQuart'
});
    
let headerNavArray = Array.prototype.slice.call(body.querySelectorAll('.main-nav__list-item'));
    
headerNavArray.forEach(function(item) {
        
    item.addEventListener('click', function(e) {
            
        moveTo.move(body.querySelector(
            item.getAttribute('href')));
            
            e.preventDefault();  
        });
    });    

let footerNavArray = Array.prototype.slice.call(body.querySelectorAll('.footer-nav__list-item'));
    
footerNavArray.forEach(function(item) {
        
        item.addEventListener('click', function(e) {
            
            moveTo.move(body.querySelector(
                item.getAttribute('href'))
                       );
            
            e.preventDefault();  
        })
        
    });  
    
let firstArrow = body.querySelector('.welcome-screen__arrow');
    
firstArrow.addEventListener('click', function(e) {
            
        moveTo.move(body.querySelector(
            firstArrow.getAttribute('href')));
            
            e.preventDefault();  
        });
    
let logo = body.querySelector('.page-header__logotype');
logo.addEventListener('click', function(e) {
            
    moveTo.move(body.querySelector(
        logo.getAttribute('href')));    
        e.preventDefault();  
    });
    
    
})(window, document, undefined);

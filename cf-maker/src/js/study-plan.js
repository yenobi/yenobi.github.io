(function(window, document, undefined) {
'use strict';
    
    let wrapper = document.querySelector('.js-study-plan');
    
    let more = Array.prototype.slice.call(wrapper.querySelectorAll('.js-study-plan__more'));
    
    more.forEach(function(item) {
        item.addEventListener('click', showPlan);
    });
    
    function showPlan(e) {
        let parent = e.target.parentElement;
        let hidden = parent.querySelector('.study-plan__hidden');
        hidden.classList.toggle('js-study-plan__hidden');
        
      e.preventDefault();  
    };
})(window, document, undefined);

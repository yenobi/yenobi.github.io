(function(window, document, undefined) {
'use strict';
    
    let table = document.querySelector('.js-table-wrapper');
    
    let more = table.querySelector('.js-programs__table-more');
    
    more.addEventListener('click', showTable);

    function showTable(e) {
        let hidden = Array.prototype.slice.call(table.querySelectorAll('.programs__table-hidden'));
        hidden.forEach(function(item) {
            item.classList.toggle('js-programs__table-hidden');
        })

        e.preventDefault();  
    };
    
})(window, document, undefined);
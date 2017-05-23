
(function(window, document, undefined) {
'use strict';
    
    var partnersSlider = new Swiper('.swiper-wrapper', {
        speed: 800,
        loop: true,
        pagination: 'false',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 6000
    });
    
    var gallerySlider = new Swiper('.swiper-container', {
        speed: 800,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        paginationClickable: true,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1
    });  
    
    var testimonalsSlider = new Swiper('.slider-container', {
        speed: 800,
        pagination: '.slider-pagination',
        paginationClickable: true,
        loop: true,
        slidesPerView: 1,
        autoplay: 4000

    });  
    
    if (document.documentElement.clientWidth >= 1024) {
        var partnersSlider = new Swiper('.swiper-wrapper', {
        loop: true,
        pagination: 'false',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3
  });
        
    var gallerySlider = new Swiper('.swiper-container', {
        speed: 400,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationType: 'fraction',
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3
    }); 
};
    
    
})(window, document, undefined);

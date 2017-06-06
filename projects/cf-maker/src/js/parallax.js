
(function(window, document, undefined) {
'use strict';
    
//    var scene = document.getElementById('scene');
    let welcome_scene = document.querySelector('.welcome-screen__bean-wrapper');
    let welcome_parallax = new Parallax(welcome_scene);
    
    let programs_scene = document.querySelector('.programs__bean-wrapper');
    let programs_parallax = new Parallax(programs_scene);
    
    let question_scene = document.querySelector('.ask-question__bean-wrapper');
    let question_parallax = new Parallax(question_scene);
    
    let gallery_scene = document.querySelector('.gallery__beans-wrapper');
    let gallery_parallax = new Parallax(gallery_scene);

})(window, document, undefined);

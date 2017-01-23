'use strict'

var field = document.getElementById('field');

var ball = document.getElementById('ball');

var fieldCoords = getCoords(field);

field.onclick = function (event) {
  console.log('eventY = ' + event.clientY );
  console.log('exentX = ' + event.clientX );

  var borderFieldTop = (fieldCoords.top + field.clientTop + ball.offsetHeight/2);

  var borderFieldBottom = (fieldCoords.top + field.offsetHeight - field.clientTop - ball.offsetHeight/2)
  console.log('borderFieldBottom = ' + borderFieldBottom);

  // первое условие работает, присаевает нужное значение, но в браузере не работает

  if ( event.clientY > borderFieldBottom ) {
    ball.style.top = borderFieldBottom + 'px';
    console.log(ball.style.top);
  } else if ( event.clientY < borderFieldTop ) {
    ball.style.top = borderFieldTop - ball.offsetHeight/2 + 'px';
  } else {
    ball.style.top = event.clientY - ball.offsetHeight/2 + 'px';
  }

  var borderFieldLeft = (fieldCoords.left + field.clientLeft + ball.offsetWidth/2);

  var borderFieldRight = (fieldCoords.left + field.clientLeft + field.clientWidth + ball.offsetWidth/2);
  console.log('borderFieldRight = ' + borderFieldRight);

  if ( event.clientX < borderFieldLeft ) {
    ball.style.left = borderFieldLeft - ball.offsetWidth/2 + 'px';
  } else if ( event.clientX > borderFieldRight ) {
    ball.style.left = borderFieldRight + 'px';
  } else {
    ball.style.left = event.clientX - ball.offsetWidth/2 + 'px';
  }
}



function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

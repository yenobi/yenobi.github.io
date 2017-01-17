'use strict'

var field = document.getElementById('field');

var ball = document.getElementById('ball');


field.onclick = function (event) {
  ball.style.top = event.clientY - ball.offsetHeight/2 + 'px';
  ball.style.left = event.clientX - ball.offsetWidth/2 + 'px';
}

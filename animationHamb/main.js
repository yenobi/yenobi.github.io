'use strict'

var container = document.getElementById('container');
var middleDiv = document.querySelector('.middle');

container.addEventListener('click', addGoingDiv);

function addGoingDiv() {
  middleDiv.classList.toggle('becomeLittleDiv');
  setTimeout("middleDiv.classList.toggle('becomeLittleDiv');", 1000);
  setTimeout("middleDiv.classList.toggle('divGoingRight');", 1000);
}

// для возвращения в первоначальное состояние, сперва
// нужно будет удалить имеющийся класс с анимацией
// чтобы ее новой анимацией возвращения заменить

var firstDiv = document.querySelector('#container div:first-child');
var lastDiv = document.querySelector('#container div:last-child');

container.addEventListener('click', makingX);

function makingX() {
  setTimeout("firstDiv.classList.toggle('uppperToX');", 2000);
  setTimeout("lastDiv.classList.toggle('lowerToX');", 2000);
}

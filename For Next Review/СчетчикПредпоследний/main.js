'use strict'

var container = document.getElementById('container');

// creating all the neccessary elements
function createEverything() {
  var counter = document.createElement('div');
  counter.classList.add('timer');
  counter.id = 'counter';
  counter.innerHTML = 0;
  container.appendChild(counter);

  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  container.appendChild(wrapper);

  var counterStart = document.createElement('button');
  counterStart.classList.add('start');
  counterStart.id = 'start';
  counterStart.innerHTML = 'Start';

  var counterStop = document.createElement('button');
  counterStop.id = 'stop';
  counterStop.innerHTML = 'Stop';

  wrapper.appendChild(counterStart);
  wrapper.appendChild(counterStop);
}

container.onload = createEverything();

var counterStart = document.getElementById('start');
var counterStop = document.getElementById('stop');

var timerId;

counterStop.addEventListener('click', cleanUp);

counterStart.addEventListener('click', counting);
counterStart.addEventListener('click', changeButton);

function counting() {
  console.log('working');
  timerId = setInterval(function() {
    counter.innerHTML++;
  }, 1000);
  counterStart.removeEventListener('click', counting);
}

function changeButton() {
  counterStart.classList.toggle('start');
  counterStart.classList.toggle('pause');

  if (counterStart.classList.contains('pause')) {
    counterStart.innerHTML = 'Pause';
    counterStart.addEventListener('click', pause);
  }

  if (counter.innerHTML > 0) {
    if (counterStart.classList.contains('start')) {
      counterStart.innerHTML = 'cont..';
      counterStart.addEventListener('click', counting);
    } 
  }
}

function pause() {
  clearInterval(timerId);
  counterStart.removeEventListener('click', pause);
}

function cleanUp() {
  clearInterval(timerId);
  counter.innerHTML = 0;

  // if (counterStart.classList.contains('pause')) {
  //   counterStart.classList.toggle('start');
  //   counterStart.classList.toggle('pause');
  // };
  counterStart.innerHTML = 'start';
  counterStart.addEventListener('click', counting);
}


// нужен один лишний клик после стопа, чтобы включить паузу

// последний баг - кнопка старт не становится зеленой, если
// стоп нажал, когда бг кнопки - красный

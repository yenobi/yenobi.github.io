'use strict'

var container = document.getElementById('container');

// creating all the neccessary elements
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
counterStart.innerHTML = 'Start';

var counterStop = document.createElement('button');
counterStop.innerHTML = 'Stop';

var pauseButton = document.createElement('button');
pauseButton.classList.add('pause');
pauseButton.innerHTML = 'pause';

wrapper.appendChild(counterStart);
wrapper.appendChild(pauseButton);
wrapper.appendChild(counterStop);

// making elements working

counterStop.addEventListener('click', cleanUp);

function cleanUp() {
  clearInterval(timerId);
  counter.innerHTML = 0;
}

counterStart.addEventListener('click', counting);
// counterStart.addEventListener('click', changeButton);
pauseButton.addEventListener('click', pause);

function pause() {
  clearInterval(timerId);
}

var timerId;

function counting() {
  timerId = setInterval(function() {
    counter.innerHTML++;
  }, 1000);
}

function changeButton() {
  counterStart.classList.toggle('start');
  counterStart.classList.toggle('pause');

  if (counterStart.classList.contains('start')) {
    counterStart.innerHTML = 'Start';
  } else {
    counterStart.innerHTML = 'Pause';
  }
}

// after finish counter - do clock

// try to do clock
// var clock = document.createElement('div');
// clock.classList.add('timer');
//
// function setClockTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//
//   clock.innerHTML = h + ':' + m + ':' + s;
//   container.appendChild(clock);
// }
//
// function printTime() {
//     setInterval(setClockTime(), 1000);
// }
// container.addEventListener('click', printTime);

'use strict'

var container = document.getElementById('container');

var timer = document.createElement('div');
timer.classList.add('timer');
timer.innerHTML = '00:00:00';

var timerLittle = document.createElement('div');
timerLittle.classList.add('timerLittle');
timerLittle.innerHTML = '00:00:00';
timer.appendChild(timerLittle);

container.appendChild(timer);

var buttonWrapper = document.createElement('div');
buttonWrapper.classList.add('buttonWrapper');

var buttonStart = document.createElement('button');
buttonStart.classList.add('start');
buttonStart.innerHTML = 'start';
buttonWrapper.appendChild(buttonStart);
// change class on click (first event)

var buttonClear = document.createElement('button');
buttonClear.classList.add('clear');
buttonClear.innerHTML = 'clear';
buttonWrapper.appendChild(buttonClear);

container.appendChild(buttonWrapper);

// change start for pause

if ( buttonStart.classList.contains('start') ) {

  buttonStart.addEventListener('click', pauseTimer);

  function pauseTimer() {
    buttonStart.classList.remove('start');
    buttonStart.classList.add('pause');
    buttonStart.innerHTML = 'pause';
  }

} else {
    buttonStart.removeEventListener('click', pauseTimer);
}

// second try to change for continue
// function contTimer() {
//   buttonStart.classList.remove('pause');
//   buttonStart.classList.add('continue');
//   buttonStart.innerHTML = 'continue';
// }
//
// while ( buttonStart.classList.contains('pause') ) {
//   buttonStart.addEventListener('click', contTimer);
// }

// first try to change for continue
// if ( buttonStart.classList.contains('pause') ) {
//   alert('pause');
//   buttonStart.addEventListener('click', contTimer);
// } else {
//   buttonStart.removeEventListener('click', contTimer);
// }

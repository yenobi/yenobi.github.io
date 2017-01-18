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
buttonClear.id = 'clear';
buttonWrapper.appendChild(buttonClear);

container.appendChild(buttonWrapper);

// change start for pause

buttonStart.addEventListener('click', pauseTimer);

function pauseTimer() {
  buttonStart.classList.toggle('pause');
  buttonStart.classList.toggle('start');

  switch (buttonStart.className) {
    case 'pause':
      buttonStart.innerHTML = 'pause';
      break;
    case 'start':
      buttonStart.innerHTML = 'start';
      break;
  }
}

buttonStart.addEventListener('click', showTimeStart);

function showTimeStart() {
  var dateStart = new Date();
  // console.log(dateStart.getSeconds());
  console.log(dateStart);
}

buttonClear.addEventListener('click', showTimeClear);

function showTimeClear() {
  var dateClear = new Date();
  console.log(dateClear.getSeconds());
}

// записываем дату по клику, потом записываем дату по новому клику и вычитаем
// их разницу

// var date = new Date();
// сколько прошло с момента date
// new Date() - date;

// some try 
// function timerNew() {
//   console.log(new Date() - dateStart)
// }
// setTimeout(timerNew(), 1000);

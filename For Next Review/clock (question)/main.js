'use strict'
alert("BEWARE! Script will kill your browser!")

var container = document.getElementById('container');

var clock = document.createElement('div');
clock.id = 'clock';
clock.classList.add('clock');
container.appendChild(clock);

container.onload = setClockTime();
var clockTimer;

function setClockTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  if (m < 10) {
    m = '0' + m;
  };
  if (s < 10) {
    s = '0' + s;
  };

  clock.innerHTML = m + ':' + s;

  if (!clockTimer) {
    clockTimer = setInterval("setClockTime()", 1000);
  }
}

var button = document.createElement('button');
button.innerHTML = 'Kill the Clock';

button.addEventListener('click', clearClockTimer);
container.appendChild(button);

function clearClockTimer() {
  clearInterval(clockTimer);
}

// QUESTION: why browser dies? 

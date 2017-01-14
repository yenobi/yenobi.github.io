'use strict'

var divsAll = document.querySelectorAll('.pane');

var buttons = document.querySelectorAll('.remove-button');

for (var i = 0; i<=buttons.length; i++) {
  var buttonEvery = buttons[i];

  buttonEvery.onclick = function() {
    var parent = this.parentElement;
    parent.style.display = 'none';
  };
  // buttonEvery.addEventListener('click', closeMessage);
}

function closeMessage() {
  var parent = this.parentElement;
  parent.style.display = 'none';
}

// var headingsAll = document.querySelectorAll('.pane h3');
// for (var i=0; i<=divsAll.length; i++) {
//   var buttonNew = button.cloneNode(true);
//   buttonNew.style.float = 'right';
//   buttonNew.style.cursor = 'pointer';
//   // divsAll.appendChild(buttonNew);
//   divsAll.forEach.insertBefore(buttonNew, headingsAll[i]);
// }
//
// var buttonsClose = document.querySelectorAll('.remove-button');
//
// for (var j = 0; j <= buttonsClose.length; j++) {
//   buttonsClose[j].addEventListener('click', closeMessage);
// }
//
// function closeMessage() {
//   button.parentElement.style.display = 'none';
// }

'use strict'

var wrapper = document.getElementById('wrapper');

// wrapper.onclick = function(event) {
//   var target = event.target.parentElement;
//   target.classList.add('close');
// }


wrapper.addEventListener('click', closeParent);

function closeParent() {
  var target = this.parentElement;
  target.classList.add('close');
}

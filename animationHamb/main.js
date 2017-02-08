'use strict'

var wrapper = document.getElementById('wrapper');
var hero = document.getElementById('hero');
wrapper.addEventListener('click', addGoing);

function addGoing() {
  hero.classList.toggle('becomeLittle');
  setTimeout("hero.classList.toggle('becomeLittle');", 1000);
  setTimeout("hero.classList.toggle('goingRight');", 1000);
  setTimeout("hero.classList.toggle('goingRight');", 3000);
}

'use strict'

var next = document.getElementById('next');
var prev = document.getElementById('prev');

var itemList = document.getElementById('itemList');
var listStyle = getComputedStyle(itemList);

var item = document.querySelector('li');

next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

function moveNext() {
  var k = counterMargin();

  if (k === 0) {
    var newMargin = k - item.offsetWidth;
  } else if (k === -7) {
    itemList.style.marginLeft = '0px';
  } else {
    var newMargin = (k-1)*item.offsetWidth;
  }
  itemList.style.marginLeft = newMargin + 'px';
}

function movePrev() {
  if (parseInt(listStyle.marginLeft) === 0) {
    itemList.style.marginLeft = '-910px';
  } else {
      itemList.style.marginLeft = parseInt(listStyle.marginLeft) + item.offsetWidth + 'px';
  }
}

function counterMargin() {
  var marginLeftAlredy = parseInt(listStyle.marginLeft);
  return marginLeftAlredy/item.offsetWidth;
}

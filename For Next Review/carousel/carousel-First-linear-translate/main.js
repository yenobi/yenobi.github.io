'use strict'

var rightArrow = document.getElementById('rightArrow');

var itemList = document.getElementById('itemList');
var listCoords = getCoords(itemList);
rightArrow.addEventListener('click', translateRight);

function translateRight() {

  var listCoordsNew = getCoords(itemList);

  switch (listCoordsNew.left) {
    case (listCoords.left):
      itemList.style.transform = "translateX(-71px)";
      break;
    case (listCoords.left - 71):
    itemList.style.transform = "translateX(-142px)";
    break;
    case (listCoords.left - 142):
    itemList.style.transform = "translateX(-213px)";
    break;
  }
}


var leftArrow = document.getElementById('leftArrow');
leftArrow.addEventListener('click', translateLeft);

function translateLeft() {
  var listCoordsNewLeft = getCoords(itemList);

  switch (listCoordsNewLeft.left) {
    case (listCoords.left - 71):
    itemList.style.transform = "translateX(0px)";
    break;
    case (listCoords.left - 142):
    itemList.style.transform = "translateX(-71px)";
    break;
    case (listCoords.left - 213):
    itemList.style.transform = "translateX(-142px)";
    break;
  }
}



function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

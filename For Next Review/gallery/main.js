'use strict'

// по клику хреф ссылки вставляется в атрибут срс
// стандартное действие ссылки блокируется

var largeImg = document.getElementById('largeImg');

var thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', tellWhere);

function tellWhere(e) {
  if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
    e.preventDefault();

    if (e.target.hasAttribute('href')) {
      var href = e.target.getAttribute('href');
    } else {
      var href = e.target.parentElement.getAttribute('href');
    }

    largeImg.src = href;

  } else {
    return;
  }
}

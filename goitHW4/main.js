'use strict'

var container = document.getElementById('container');

// begin function addQuestion

function addQuestion(amount) {

  var heading = document.createElement('h1');
  heading.innerHTML = "Programming test";
  container.appendChild(heading);

  var wholeTest = document.createElement('form');
  container.appendChild(wholeTest);

  var orderedList = document.createElement('ol');
  wholeTest.appendChild(orderedList);

  amount = prompt('how many question?');

  for (var j = 1; document.getElementsByTagName('li').length + 1 <= amount; j++) {
    var question = document.createElement('li');
    orderedList.appendChild(question);

    var fieldset = document.createElement('fieldset');
    question.appendChild(fieldset);

    var legend = document.createElement('legend');
    legend.innerHTML = "Question № " + j;
    fieldset.appendChild(legend);

      for (var i = 1; i <=3; i++ ) {
        var div = document.createElement('div');

        var radio = document.createElement('input');
        radio.type = "radio";
        radio.name = j;
        var radioID = "";
        radioID += j + "." + i;
        radio.id = radioID;
        div.appendChild(radio);

        var answer = document.createElement('label');
        answer.setAttribute('for', radioID);
        answer.innerHTML = "answer " + radioID;
        div.appendChild(answer);

        fieldset.appendChild(div);
      }
    }

    var button = document.createElement('button');
    button.type = 'submit';
    button.innerHTML = 'Check results';
    wholeTest.appendChild(button);
  // end of function
}

// Selectors
var inputTxt = document.querySelector('#input-txt');
var btnTranslate = document.querySelector('#btn-translate');
var outputTxt = document.querySelector('#output-txt');

const url = 'https://api.funtranslations.com/translate/minion.json?text=';

doTranslate = () => {
  var toTranslate = inputTxt.value;
  changeUrl(toTranslate);
};

changeUrl = (inputTxt) => {
  let reqUrl = url + inputTxt;
  translate(reqUrl);
};

translate = (reqURL) => {
  fetch(reqURL)
    .then((response) => response.json())
    .then((json) => {
      outputTxt.innerText = json.contents.translated;
    })
    .catch(() => alert('some error occured'));
};

// Event Listner
btnTranslate.addEventListener('click', doTranslate);

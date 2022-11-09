/*console.log("scrip is working properly");
var userName= prompt("give me your name")
var welcomeMessage="this scrip is working properly " + userName;
alert(welcomeMessage);*/
var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input")
console.log(txtInput);
function clickEventHandler(){
    console.log("clicked");
    console.log("input " + txtInput.value);
}
btnTranslate.addEventListener("click", clickEventHandler);
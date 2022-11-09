/*console.log("scrip is working properly");
var userName= prompt("give me your name")
var welcomeMessage="this scrip is working properly " + userName;
alert(welcomeMessage);*/
var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#txt-output");
//txtOutput.innerText="kunal samnata";

//console.log(outputDiv);
function clickEventHandler(){
    //console.log("clicked");
    //console.log("input " + txtInput.value);
    outputDiv.innerText= "translate "+txtInput.value;
};
btnTranslate.addEventListener("click", clickEventHandler);
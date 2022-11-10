/*console.log("scrip is working properly");
var userName= prompt("give me your name")
var welcomeMessage="this scrip is working properly " + userName;
alert(welcomeMessage);*/


//button click
var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", clickEventHandler);


//take input
var txtInput= document.querySelector("#txt-input");

//show output
var outputDiv= document.querySelector("#txt-output");

//txtOutput.innerText="kunal samnata";

//var sarverURL= "https://api.funtranslations.com/translate/"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    return serverURL +"?" + "text=" + text
}

function errorHandeler(error){
    console.log("error occured "+ error);
    alert("something wrong with the server! please try after some time")
}


//console.log(outputDiv);
function clickEventHandler(){
    //console.log("clicked");
    //console.log("input " + txtInput.value);
    //outputDiv.innerText= "translate "+txtInput.value;
    var inputText = txtInput.value; //takeing input from user

    //calling server for processing 
    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {

        var translatedText= json.contents.translated;
        outputDiv.innerText= translatedText
        //console.log(json.contents.translated))
    })
    .catch(errorHandeler)

};


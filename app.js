var serverURL = "https://api.funtranslations.com/translate/chef.json"
var textArea = document.querySelector("#txtArea");
var btnTranslate = document.querySelector("#btn-translate");
var output= document.querySelector("#outputDiv");

function getTranslateURL(text){
    return serverURL + "?" + "text= " + text;
}

// output.innerText = "translated";

function errorHandler(error) {
    alert("Something wrong happened to server.Try after sometime")
}

function clickHandler(){
    var inputText = textArea.value;  //taking input
    fetch(getTranslateURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translated = json.contents.translated;
        output.innerText = translated;
    })
        .catch(errorHandler)
    };
   
    btnTranslate.addEventListener("click", clickHandler);





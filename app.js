
var txtArea = document.querySelector("#txtArea");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv= document.querySelector(".output-div");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslateURL(text){
   return serverURL + "?text=" + text;
}



function errorHandler(error) {
    alert("Something wrong happened to server.Try after sometime")
}

function clickHandler() {
    var inputData = txtArea.value;
    fetch(getTranslateURL(inputData))
    .then(res => res.json())
    .then(json => {
        var translatedText = json.contents.translated;
        console.log(translatedText);
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler);

};

btnTranslate.addEventListener("click", clickHandler);






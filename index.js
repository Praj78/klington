var input=document.querySelector("#input");
var output=document.querySelector("#output");
var btnTranslate= document.querySelector("#btn-translate");
var url="https://api.funtranslations.com/translate/klingon.json";

function translationURL(text){
return url+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured"+error)
    alert("somehing went wrong,try again after some time")
}

function languageTranslated(){
var inputTxt=input.value;

fetch(translationURL(inputTxt))
.then(response=>response.json())
.then(json=>{
    var translatedText=json.contents.translated;
    output.innerText = translatedText;
})
.catch(errorHandler)
}

btnTranslate.addEventListener("click",languageTranslated);
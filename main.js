SpeechRecognition=window.webkitSpeechRecognition;
recorder=new SpeechRecognition();
function sl(){
    document.getElementById("textbox").innerHTML="";
    recorder.start();
}
recorder.onresult =function(event){

   //console.log(event);
    myText=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=myText;
    if (myText=="Selfie.") {
        resp();
    }
}
function resp(){
    texttospeech=window.speechSynthesis;
    textresp="taking selfie in three seconds";
    speechresp=new SpeechSynthesisUtterance(textresp);
    texttospeech.speak(speechresp);
    Webcam.attach(document.getElementById("camera"));

SpeechRecognition=window.webkitSpeechRecognition;
recorder=new SpeechRecognition();
function sl(){
    document.getElementById("textbox").innerHTML="";
    recorder.start();
}
recorder.onresult =function(event){

    console.log(event);
    myText=event.results[0][0].transcript
}
(function (window){
  var helloSpeaker = {};

  var speakWord = "Hello";

  helloSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  helloSpeaker.speakSimple = function speakSimple(name) {
    return (speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);



(function (window) {
  var byeSpeaker = {};

  var speakWord = "Good Bye";

  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  byeSpeaker.speakSimple = function speakSimple(name) {
    return speakWord + " " + name;
  }

  window.byeSpeaker = byeSpeaker;
  
}) (window);


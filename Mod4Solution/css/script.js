(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var newArr = [];

  for (var i=0; i<names.length; i++) {
    selectedName = names[i];
    var firstLetter = selectedName.charAt(0).toLowerCase();
    
    if (firstLetter=="j") {
      byeSpeaker.speak(selectedName);   
    }

    else {
      helloSpeaker.speak(selectedName);
    }
  }

  function myFunc (x) {
    var firstLetter = x.charAt(0).toLowerCase();
    if (firstLetter == "j") {
      byeSpeaker.speak(x);
      return byeSpeaker.speakSimple(x);
    }
    else {
      helloSpeaker.speak(x);
      return helloSpeaker.speakSimple(x);
    }
  }

  newArr = names.map(myFunc);

} )();




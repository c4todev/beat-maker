var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    var buttonKey = this.getAttribute("data-key");

    makeSound(buttonKey);

    buttonAnimation(buttonKey);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/CRASH.wav");
      crash.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/Tom 1.wav");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/Tom 2.wav");
      tom2.play();
      break;

    case "d":
      var kick = new Audio("sounds/Kick.wav");
      kick.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/Tom 3.wav");
      tom3.play();
      break;

    case "k":
      var snare = new Audio("sounds/Snare.wav");
      snare.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/Tom 4.wav");
      tom4.play();
      break;

    case "o":
      var bass = new Audio("sounds/Bass Shot O.wav");
      bass.play();
      break;

    default:
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector(
    ".drum[data-key='" + currentKey + "']"
  );
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

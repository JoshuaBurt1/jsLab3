// STEP 1: Open this page in a browser tab and open up the console
// STEP 2: Build an HTML element above to contain the value of the var i (the counter inside the loop)
var page = document.querySelector("html");
var output = document.querySelector("#countdown");
var time = document.querySelector(".kcit");
// Anything extra that you can think of!
var resetButton = document.querySelector("#reset");
var resetCounter = 1;
var heightX = 1.618 ** resetCounter;
resetButton.disabled = true;

function countDown() {
  for (let i = 10; i >= 0; i--) {
    setTimeout(function () {
      console.log(i);
      //Turns clock hand: calls timeTurner function which sets the --rotation attribute of html element class .kcit (time) to a rotation percentage (i/9) * 360
      timeTurner(time, i / 9);
      // STEP 3: Add a condition with an IF statement that checks if countDown is zero - and if it is, output text to the HTML element above that reads, "Blastoff!"
      if (i == 0) {
        output.textContent = `Blastoff!`;
      }
      // STEP 4: Change the background color of the page from yellow (from 8-5) , to orange (from 4-1), to red (at 0) using a SWITCH statement
      switch (true) {
        // STEP 5b: Build out three cases, followed by a default
        case i <= 8 && i > 4:
          page.style.backgroundColor = "yellow";
          break;
        case i <= 4 && i > 0:
          page.style.backgroundColor = "orange";
          break;
        case i == 0:
          page.style.backgroundColor = "red";
          //when i = 0, calls timeTurner function to stay at 10/9 position, calls logarithm function to increase height of clock hand relative to full rotation #
          timeTurner(time, 10 / 9);
          var heightX = 1.618 ** resetCounter;
          //Increases clock hand height: sets the --height attribute of html element class .kcit (time) to a golden ratio multiple on each rotation
          logarithm(time, heightX);
          //when the clock is not moving, the css element of text and button is visible (1), and button is enabled (false)
          output.style.opacity = "1";
          resetButton.style.opacity = "1";
          resetButton.disabled = false;
          break;
        default:
          page.style.backgroundColor = "white";
      }
    }, 10000 - 1000 * i);
  }
}
countDown();

function timeTurner(element, rotation) {
  element.style.setProperty("--rotation", rotation * 360);
}

function logarithm(time, height) {
  time.style.setProperty("--height", height);
}

//when the clock is moving: the css element of text and button is not visible (0), and button is disabled (true)
function reset() {
  output.style.opacity = "0";
  resetButton.style.opacity = "0";
  resetButton.disabled = true;
  resetCounter++;
  countDown();
}

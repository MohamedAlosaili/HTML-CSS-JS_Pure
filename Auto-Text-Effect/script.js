const text = document.querySelector("#text");
const textArray = text.innerHTML.split("");
const speedNumber = document.querySelector("#effect-speed");

text.innerHTML = "";
let start = 0;
let speed = 500;

gatherText();

speedNumber.addEventListener("change", () => {
  speed = 550 - 50 * speedNumber.value;
});

// function callFunction() {
//   setTimeout(callFunction, speed);
//   gatherText();
// }
// setTimeout(callFunction, speed);

function gatherText() {
  text.innerHTML += textArray[start];
  start++;
  if (start > textArray.length) {
    start = 0;
    text.innerHTML = "";
  }
  setTimeout(gatherText, speed);
}

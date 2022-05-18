const triangle = document.querySelectorAll(".triangle");

let rotateOne = +getComputedStyle(triangle[0]).getPropertyValue("--rotation");
let rotateTwo = +getComputedStyle(triangle[1]).getPropertyValue("--rotation");

setInterval(() => {
  rotateOne += 180;
  updateRotation(0, rotateOne);
}, 1200);

setInterval(() => {
  setTimeout(() => {
    rotateTwo += 180;
    updateRotation(1, rotateTwo);
  }, 500);
}, 1200);

function updateRotation(idx, rotate) {
  triangle[idx].style.setProperty("--rotation", rotate);
}

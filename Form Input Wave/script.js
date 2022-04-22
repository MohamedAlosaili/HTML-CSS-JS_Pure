let emailIpt = document.querySelector("[name='email']");
let passwordIpt = document.querySelector("[name='password']");
let emailLable = document.querySelectorAll("[for='email'] > span");
let passwordLable = document.querySelectorAll("[for='password'] > span");

let focusNumber = 0;
let blurNumber = 0;
let focusInterv;
let blurInterv;

emailIpt.addEventListener("focus", (e) => {
  e.target.classList.add("no-empty");

  focusNumber = 0;
  focusInterv = setInterval(addMovement, 50, emailLable);
});

emailIpt.addEventListener("blur", (e) => {
  blurNumber = 0;
  if (e.target.value === "") {
    blurInterv = setInterval(removeMovement, 50, emailLable);
    e.target.classList.remove("no-empty");
  }
});

passwordIpt.addEventListener("focus", (e) => {
  e.target.classList.add("no-empty");

  focusNumber = 0;
  focusInterv = setInterval(addMovement, 50, passwordLable);
});

passwordIpt.addEventListener("blur", (e) => {
  blurNumber = 0;
  if (e.target.value === "") {
    blurInterv = setInterval(removeMovement, 50, passwordLable);
    e.target.classList.remove("no-empty");
  }
});

function addMovement(label) {
  if (focusNumber === label.length - 1) {
    clearInterval(focusInterv);
  }

  label[focusNumber].classList.remove("down");
  label[focusNumber].classList.add("up");

  focusNumber++;
}

function removeMovement(label) {
  if (blurNumber === label.length - 1) {
    clearInterval(blurInterv);
  }

  label[blurNumber].classList.remove("up");
  label[blurNumber].classList.add("down");

  blurNumber++;
}

let choiceArea = document.querySelector("#choice");
let choicesHolder = document.querySelector(".choices-holder");

choiceArea.focus();

window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    choiceArea.removeEventListener("input", listenToInput);

    randomChoice(Array.from(choicesHolder.children));

    choiceArea.value = "";
    choiceArea.blur();
  } else {
    choiceArea.focus();
    choiceArea.addEventListener("input", listenToInput);
  }
});

function listenToInput() {
  let arr = createArray(choiceArea.value);
  createChoices(arr);
}

function createArray(value) {
  return value.split(",");
}

function createChoices(arr) {
  choicesHolder.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] !== 0) {
      let span = document.createElement("span");
      span.append(document.createTextNode(arr[i]));

      choicesHolder.append(span);
    }
  }
}

function randomChoice(arr) {
  let num = 0;
  let interv = setInterval(function () {
    arr.forEach((span) => span.classList.remove("the-chosen"));
    arr[Math.floor(Math.random() * arr.length)].classList.add("the-chosen");

    num++;

    if (num * 100 >= 3000) {
      clearInterval(interv);
    }
  }, 100);
}

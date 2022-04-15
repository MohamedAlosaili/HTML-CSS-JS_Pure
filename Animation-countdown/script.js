let box = document.querySelector(".box");
let numbersHolder = document.querySelector(".numbers-holder");
let replayBtn = document.querySelector(".replay-btn");

let numberOfNums = 20;
let nums = [];

function createNums() {
  numbersHolder.innerHTML = "";

  for (let i = 0; i <= numberOfNums; i++) {
    let span = document.createElement("span");
    span.className = "num";
    if (i === 0) span.className = "num in";
    span.append(document.createTextNode(numberOfNums - i));
    numbersHolder.append(span);
  }
  nums = document.querySelectorAll(".numbers-holder > .num");
  changeNumbers();
}
createNums();

function changeNumbers() {
  let countDown = setInterval(() => {
    let curIndex;

    nums.forEach((num, index) => {
      if (num.classList.contains("in")) curIndex = index;
      num.classList.remove("in");
    });

    if (nums[curIndex].innerHTML == "0") {
      box.classList.add("flip");
      clearInterval(countDown);
    } else {
      nums[curIndex + 1].classList.add("in");
    }
  }, 1000);
}

replayBtn.addEventListener("click", (e) => {
  document.querySelectorAll(".numbers-holder > .num").forEach((num, index) => {
    num.classList.remove("in");
    if (index === 0) num.classList.add("in");
  });
  changeNumbers();
  box.classList.remove("flip");
});

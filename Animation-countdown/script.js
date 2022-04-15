let box = document.querySelector(".box");
let nums = document.querySelectorAll(".numbers-holder > .num");
let numsArr = Array.from(nums);
let replayBtn = document.querySelector(".replay-btn");

function changeNumbers() {
  let countDown = setInterval(() => {
    let curIndex;

    numsArr.forEach((num, index) => {
      if (num.classList.contains("in")) curIndex = index;
      num.classList.remove("in");
    });

    if (nums[curIndex].innerHTML == "0") {
      box.classList.add("flip");
      clearInterval(countDown);
    } else {
      numsArr[curIndex + 1].classList.add("in");
    }
  }, 1000);
}
changeNumbers();

replayBtn.addEventListener("click", (e) => {
  numsArr.forEach((num, index) => {
    num.classList.remove("in");
    if (index === 0) num.classList.add("in");
  });
  changeNumbers();
  box.classList.remove("flip");
});

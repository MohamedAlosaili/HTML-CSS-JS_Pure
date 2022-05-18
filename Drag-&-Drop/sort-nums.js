const nums = document.querySelectorAll(".drag-img");
const boxes = document.querySelectorAll(".num-holders");
const sortStateBtn = document.querySelector("#state-btn");

nums.forEach((num) => {
  num.addEventListener("dragstart", dragStart);
  num.addEventListener("dragend", dragEnd);
});

let idx = 0;
let parentElement;

for (const box of boxes) {
  idx++;
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
}

function dragStart(e) {
  e.target.className += " dragged";
  setTimeout(() => (this.className = "invasible"), 0);

  e.dataTransfer.setData("text", e.target.dataset.num);
  parentElement = e.target.parentElement;
}

function dragEnd(e) {
  e.target.className = "drag-img";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.className += " dragenter";
}

function dragLeave() {
  this.className = "box";
}

function drop(e) {
  this.className = "box";

  const draggedElement = document.querySelector(
    `[data-num="${e.dataTransfer.getData("text")}"]`
  );

  parentElement.append(this.firstElementChild);

  this.append(draggedElement);

  checkSortImgs();
}

function checkSortImgs() {
  const check = Array.from(boxes).every((box) => {
    const boxNum = box.dataset.number;
    const imgNum = box.firstElementChild.dataset.num;

    if (boxNum === imgNum) return true;

    return false;
  });

  changeBtnState(check);
}

function changeBtnState(check) {
  if (check) {
    sortStateBtn.classList.add("sorted");
    sortStateBtn.firstElementChild.innerText = "Sorted";
    sortStateBtn.lastElementChild.className = "fa-solid fa-check";
  } else {
    sortStateBtn.classList.remove("sorted");
    sortStateBtn.firstElementChild.innerText = "Not Sorted";
    sortStateBtn.lastElementChild.className = "fa-solid fa-x";
  }
}

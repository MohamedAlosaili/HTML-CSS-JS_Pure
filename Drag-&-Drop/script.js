const draggableImg = document.querySelector("#draggable-img");
const boxes = document.querySelectorAll(".box");

draggableImg.addEventListener("dragstart", dragStart);
draggableImg.addEventListener("dragend", dragEnd);

for (const box of boxes) {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
}

function dragStart(e) {
  e.target.className += " dragged";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(e) {
  e.target.className = "draggable-img";
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

function drop() {
  this.className = "box";
  this.append(draggableImg);
}

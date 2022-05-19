const description = document.querySelector("#description");
const images = document.querySelector("#images");

const arrowUp = document.querySelector("#arrow-up");
const arrowDown = document.querySelector("#arrow-down");

let start = 0;
moveSlider(start);

arrowUp.addEventListener("click", () => {
  start++;

  if (start >= images.children.length) start = 0;

  moveSlider(start);
});

arrowDown.addEventListener("click", () => {
  start--;

  if (start < 0) start = images.children.length - 1;

  moveSlider(start);
});

function moveSlider(start) {
  description.style.bottom = `${-start * 100}vh`;
  images.style.top = `${-start * 100}vh`;
}

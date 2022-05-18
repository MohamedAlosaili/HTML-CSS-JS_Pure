const canvas = document.querySelector("#draw-panel");
const ctx = canvas.getContext("2d");

const minus = document.querySelector("#minus");
const lineSize = document.querySelector("#line-size");
const plus = document.querySelector("#plus");
const color = document.querySelector("#color");
const clear = document.querySelector("#clear");

minus.addEventListener("click", () => {
  console.log(lineSize.innerHTML);
  if (+lineSize.innerHTML > 5) lineSize.innerHTML = +lineSize.innerHTML - 5;
  canvasInitValues();
});

plus.addEventListener("click", () => {
  if (+lineSize.innerHTML < 50) lineSize.innerHTML = +lineSize.innerHTML + 5;
  canvasInitValues();
});

color.addEventListener("input", canvasInitValues);

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 150;

console.log(canvas.height);
console.log(canvas.width);

let isDrawing = false;
let x = 0;
let y = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [x, y] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function canvasInitValues() {
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = lineSize.innerHTML;
  ctx.strokeStyle = color.value;
}

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [x, y] = [e.offsetX, e.offsetY];
}

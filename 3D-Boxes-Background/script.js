const btn = document.querySelector("#magic-btn");
const boxesHolder = document.querySelector("#boxes-holder");

btn.addEventListener("click", () => {
  boxesHolder.classList.toggle("active");
});

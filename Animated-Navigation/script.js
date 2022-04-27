let container = document.querySelector(".container");
let toggler = document.querySelector("#toggler");
let span = document.querySelector("#toggler > span");

toggler.addEventListener("click", () => {
  toggler.classList.remove("active");

  toggler.classList.add("rotate");

  container.classList.toggle("open");
});
span.addEventListener("animationend", () => {
  toggler.classList.remove("rotate");
  if (container.classList.contains("open")) toggler.classList.add("active");
});

let steps = document.querySelectorAll(".step");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", (e) => {
  prev.classList.remove("blocked");

  let index;
  steps.forEach((step, idx) => {
    if (step.classList.contains("complete") && step.nextElementSibling)
      index = idx;
  });

  if (index === steps.length - 2) next.classList.add("blocked");

  steps[index].nextElementSibling.classList.add("complete");
});

prev.addEventListener("click", (e) => {
  next.classList.remove("blocked");

  let index = 0;
  steps.forEach((step, idx) => {
    if (step.classList.contains("complete") && step.previousElementSibling)
      index = idx;
  });

  if (index === 1) prev.classList.add("blocked");

  steps[index].classList.remove("complete");
});

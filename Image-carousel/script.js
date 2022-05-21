const holder = document.querySelector("[data-images-holder]");
const prev = document.querySelector("[data-prev]");
const next = document.querySelector("[data-next]");
const autoSlider = document.querySelector("[data-auto-slide]");

let slideNum = 0;
let width = parseInt(
  getComputedStyle(holder.children[0]).getPropertyValue("width")
);
const length = holder.children.length;

autoSlide();
autoSlider.classList.add("active");

autoSlider.addEventListener("click", () => {
  autoSlider.classList.toggle("active");

  if (autoSlider.classList.contains("active")) autoSlide();
});

prev.addEventListener("click", () => {
  slideNum--;
  slideImage();
});

next.addEventListener("click", () => {
  slideNum++;
  slideImage();
});

function slideImage() {
  if (slideNum < 0) slideNum = length - 1;
  else if (slideNum >= length) slideNum = 0;

  holder.style.transform = `translateX(-${slideNum * width}px)`;
}

function autoSlide() {
  const interval = setInterval(() => {
    if (!autoSlider.classList.contains("active")) clearInterval(interval);
    else {
      slideNum++;
      slideImage();
    }
  }, 3000);
}

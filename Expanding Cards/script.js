let boxes = document.querySelectorAll(".box");
let activeAlt = document
  .querySelector(".box.active > .image")
  .getAttribute("alt");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    boxes.forEach((box) => {
      box.classList.remove("active");
    });
    box.classList.add("active");
    crateImgText(box.firstElementChild.getAttribute("alt"));
  });
});

function crateImgText(text) {
  boxes.forEach((box) => {
    if (box.children[1]) {
      box.children[1].remove();
    }
  });

  let span = document.createElement("span");
  span.className = "text";
  span.append(text);
  console.log(text);
  setTimeout(() => (span.style.opacity = "1"), 300);
  document.querySelector(".box.active").append(span);
}
crateImgText(activeAlt);

let qIcon = document.querySelectorAll(".q-icon");
let boxes = document.querySelectorAll(".box");
let question = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");

qIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const currentBox = e.target.parentElement.parentElement;

    currentBox.classList.toggle("open");

    resizeBox(currentBox);
  });
});

function resizeBox(currentBox) {
  const pageFont = parseInt(
    getComputedStyle(document.querySelector("html"), "").fontSize
  );

  boxes.forEach((box, index) => {
    // remove open from all boxes
    if (box !== currentBox) {
      box.classList.remove("open");
    }

    if (box.classList.contains("open")) {
      box.style.height =
        (currentBox.clientHeight + answers[index].clientHeight + 30) /
          pageFont +
        "rem";
    } else {
      box.style.height = `${
        (6 * pageFont + question[index].clientHeight) / pageFont
      }rem`;
    }
  });
}
resizeBox(null);

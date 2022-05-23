const images = document.querySelectorAll("[data-img]");
const btns = document.querySelectorAll("[data-btn]");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const page = e.currentTarget.dataset.btn;
    removeActive(page, "img", images);
    removeActive(page, "btn", btns);
  });
});

function removeActive(page, dataType, array) {
  array.forEach((item) => {
    if (item.dataset[dataType] !== page) item.classList.remove("active");
    else item.classList.add("active");
  });
}

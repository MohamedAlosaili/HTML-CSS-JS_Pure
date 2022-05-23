const backBlur = document.querySelector("#back-blur");
const form = document.querySelector("[data-form]");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => e.preventDefault());

password.addEventListener("input", (e) => {
  const length = e.currentTarget.value.length;
  resetBlur(length);
});

function resetBlur(length) {
  if (length <= 10) {
    backBlur.style.backdropFilter = `blur(${50 - 5 * length}px)`;
  } else {
    backBlur.style.backdropFilter = `blur(0px)`;
  }
}

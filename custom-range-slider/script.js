const inputRange = document.querySelector("#range");
const rangeValue = document.querySelector("#num-box");

inputRange.addEventListener("input", (e) => {
  let value = e.target.value;

  rangeValue.innerHTML = value;
  rangeValue.style.left = `${value}%`;
});

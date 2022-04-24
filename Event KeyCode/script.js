let start = document.querySelector(".start");
let key = document.querySelector("#key");
let code = document.querySelector("#code");
let keyCode = document.querySelector("#key-code");

window.addEventListener("keydown", (e) => {
  start.classList.add("hide");

  // This solution better than My solution
  key.innerHTML = e.key === " " ? "Space" : e.key;
  //   key.innerHTML = e.key
  code.innerHTML = e.code;
  keyCode.innerHTML = e.keyCode;
});

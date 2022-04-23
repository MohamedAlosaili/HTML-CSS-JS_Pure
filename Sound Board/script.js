let audio = document.querySelector(".audio");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    audio.src = `Audio/${btn.dataset.type}.mp3`;
  });
});

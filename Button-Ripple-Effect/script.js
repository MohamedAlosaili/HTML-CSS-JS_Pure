const btn = document.querySelector("#btn");
const flash = document.querySelector(".flash");

btn.addEventListener("click", (e) => {
  let rect = e.currentTarget.getBoundingClientRect();

  flash.style.setProperty("left", `${e.clientX - rect.left}px`);
  flash.style.setProperty("top", `${e.clientY - rect.top}px`);
  flash.classList.add("active");

  flash.addEventListener("animationend", () =>
    flash.classList.remove("active")
  );
});

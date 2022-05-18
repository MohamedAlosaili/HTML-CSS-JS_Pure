const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

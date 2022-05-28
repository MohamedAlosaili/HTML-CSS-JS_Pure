const hamburger = document.querySelector("#hamburger");
const closeLeyers = document.querySelector("#close-btn");
const leyers = document.querySelectorAll(".leyer");

hamburger.addEventListener("click", () => {
  leyers.forEach((leyer) => leyer.classList.add("active"));
});

closeLeyers.addEventListener("click", () => {
  leyers.forEach((leyer) => leyer.classList.remove("active"));
});

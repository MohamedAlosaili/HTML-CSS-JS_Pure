let searchIcon = document.querySelector("#icon");
let searchInput = document.querySelector("#search");

searchIcon.addEventListener("click", (e) => {
  searchInput.classList.toggle("active");
});

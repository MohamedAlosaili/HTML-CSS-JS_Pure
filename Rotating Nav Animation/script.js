let toggler = document.querySelector(".toggler");
let openNav = document.querySelector(".btn.open");
let closeNav = document.querySelector(".btn.close");
let dogSection = document.querySelector(".my-dog");
let navMenu = document.querySelector(".side-nav");

openNav.addEventListener("click", () => {
  toggler.classList.add("open");
  dogSection.classList.add("nav-open");
  navMenu.classList.add("active");
});

closeNav.addEventListener("click", () => {
  toggler.classList.remove("open");
  dogSection.classList.remove("nav-open");
  navMenu.classList.remove("active");
});

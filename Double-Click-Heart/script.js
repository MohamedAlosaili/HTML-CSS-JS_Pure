const likesNum = document.querySelector("#num");
const img = document.querySelector(".img");
const like = document.querySelector("#heart");

img.addEventListener("dblclick", showLike);

let numOfLikes = 0;

function showLike(e) {
  const imgBound = img.getBoundingClientRect();

  like.style.top = `${e.clientY - imgBound.top}px`;
  like.style.left = `${e.clientX - imgBound.left}px`;

  like.classList.add("active");

  numOfLikes++;
  likesNum.innerHTML = numOfLikes;
}

like.addEventListener("animationend", () => like.classList.remove("active"));

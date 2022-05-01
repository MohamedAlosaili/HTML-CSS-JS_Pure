const API_URL = "https://api.pexels.com/v1/search?query=nature&per_page=30";
const API_KEY = "563492ad6f91700001000001b7edd23984404c19b484f305bf6d1244";

const container = document.querySelectorAll(".img-container");
const arrows = document.querySelectorAll(".btn");

getImages();

let count = 1;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.currentTarget.dataset.dir === "right") {
      count++;
      changeActive();
    } else {
      count--;
      changeActive();
    }
  });
});

function changeActive() {
  if (count > container.length) count = 1;
  else if (count < 1) count = container.length;

  container.forEach((cont) => cont.classList.remove("active"));
  container[count - 1].classList.add("active");
}

async function getImages() {
  const resp = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const dataImgs = await resp.json();

  console.log(dataImgs);
  loadImgs(dataImgs.photos);
}

function loadImgs(dataImgs) {
  container.forEach((cont, idx) => {
    let imgOne = cont.querySelector(".first-img");
    let imgTwo = cont.querySelector(".second-img");

    imgOne.src = dataImgs[idx + 5].src.original;
    imgOne.alt = dataImgs[idx + 5].alt;
    imgOne.title = "photographer: " + dataImgs[idx + 5].photographer;

    imgTwo.src = dataImgs[idx + 5].src.original;
    imgTwo.alt = dataImgs[idx + 5].alt;
    imgTwo.title = "photographer: " + dataImgs[idx + 5].photographer;
  });
}

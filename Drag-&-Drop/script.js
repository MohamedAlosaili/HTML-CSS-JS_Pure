const API_KEY = "563492ad6f91700001000001b7edd23984404c19b484f305bf6d1244";
const API_URL = "https://api.pexels.com/v1/search?query=dasert&per_page=1";

const image = document.querySelector(".img");

getImage();

async function getImage() {
  const response = await fetch(API_URL, {
    headers: { Authorization: API_KEY },
  });
  const img = await response.json();

  image.src = img.photos[0].src.original;
}

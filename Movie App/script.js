const template = document.querySelector("#template");
const container = document.querySelector("#movies-container");
const searchInput = document.querySelector("#search");
const searchIcon = document.querySelector("#icon");
const iframe = document.querySelector(".video-frame");
const videoSection = document.querySelector("#video-section");
const closeIcon = videoSection.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
  videoSection.classList.remove("active");
  iframe.src = "";
});

let apiKey = "*************";
let moviesArr = [];

let searchValue = "";

getMoviesId(false, "MostPopularMovies");

container.onmouseenter = function () {
  container.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      createTrailer(card.dataset.id);
      videoSection.classList.add("active");
    });
  });
};

searchIcon.addEventListener("click", () => {
  if (!searchInput.classList.contains("active")) {
    searchInput.classList.add("active");
  } else if (+searchInput.value !== 0) {
    searchValue = `?title=${search.value}`;
    getMoviesId(true, "AdvancedSearch");
    searchInput.classList.remove("active");
  }
});

async function getMoviesId(isSearch, value) {
  const response = await fetch(
    `https://imdb-api.com/en/API/${value}/${apiKey}/${searchValue}`
  );
  const data = await response.json();

  container.innerHTML = "";
  for (let i = 0; i < 12; i++)
    container.append(template.content.cloneNode(true));

  if (!isSearch) {
    data.items.forEach((item, idx) => {
      if (idx < 12)
        moviesArr.push({
          id: item.id,
          title: item.title,
        });
    });

    moviesArr.forEach((item, idx) => {
      getMoviesDetails(item, idx);
    });
  } else {
    data.results.forEach((result, idx) => {
      if (idx < 12) createMovieCard(result, idx);
    });
  }
}

async function getMoviesDetails(item, idx) {
  const response = await fetch(
    `https://imdb-api.com/en/API/AdvancedSearch/${apiKey}/?title=${item.title}`
  );
  const data = await response.json();
  data.results.filter((result) => {
    result.id === item.id ? createMovieCard(result, idx) : false;
  });
}

function createMovieCard(data, idx) {
  const cards = document.querySelectorAll(".movie-card");

  cards[idx].dataset.id = data.id;

  cards[idx].querySelector(".poster").src = data.image;

  cards[idx].querySelector(".title").innerText = data.title;

  const rate = cards[idx].querySelector(".rate");
  rate.innerText = data.imDbRating;

  if (rate.innerText < 5) rate.classList.add("bad");
  else if (rate.innerText < 7.5) rate.classList.add("good");
  else rate.classList.add("excellent");

  cards[idx].querySelector(".overview .text").innerHTML = data.plot;
}

let width = window.innerWidth;

window.addEventListener("resize", () => {
  width = window.innerWidth;
});

async function createTrailer(id) {
  const respon = await fetch(
    `https://imdb-api.com/en/API/Trailer/${apiKey}/${id}`
  );
  const data = await respon.json();

  console.log(data);

  if (width > 690) {
    iframe.src = src = `${data.linkEmbed}?autoplay=false&width=640`;
    iframe.setAttribute("width", "640");
    iframe.setAttribute("height", "360");
  } else {
    iframe.src = src = `${data.linkEmbed}?autoplay=false&width=${width}`;
    iframe.setAttribute("width", width);
    iframe.setAttribute("height", Math.ceil(width / 1.78));
  }
}

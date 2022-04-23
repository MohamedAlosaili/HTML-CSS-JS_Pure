let joke = document.querySelector(".joke");
let jokesBtn = document.querySelector(".btn");

jokesBtn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    const jokeText = await response.json();
    joke.innerHTML = jokeText.joke;
  } catch (error) {
    console.log(error);
    return "Opps I Guess The Joke Run A way, Try Reload The Page";
  }
}
getJoke();
console.log(fetch("https://icanhazdadjoke.com"));
/*
This Solution From Github My Solution Is The Above


jokesBtn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const jokes = await response.json();
    joke.innerHTML = jokes.joke;
  } catch (error) {
    console.log(error);
  }
}
getJoke();
*/

const container = document.querySelector("[data-users]");
const cardTemplate = document.querySelector("#card-template");
const searchInput = document.querySelector("#search");

getUsersInfo();
let arrOfUsers = [];

searchInput.addEventListener("input", () => {
  showResult(searchInput.value.toLowerCase());
});

function showResult(value) {
  let arrOfResult = [];

  arrOfUsers.forEach((user) => {
    if (
      user.firstName.toLowerCase().includes(value) ||
      user.lastName.toLowerCase().includes(value)
    ) {
      arrOfResult.push(user);
    } else if (
      user.address.state.toLowerCase().includes(value) ||
      user.address.city.toLowerCase().includes(value)
    ) {
      arrOfResult.push(user);
    }
  });

  addResultToContainer(arrOfResult);
}

function addResultToContainer(arrOfResult) {
  container.innerHTML = "";
  arrOfResult.forEach((user, idx) => {
    container.append(cardTemplate.content.cloneNode(true));

    document.querySelectorAll(".img")[idx].src = user.image;
    document.querySelectorAll(".name")[idx].innerHTML =
      user.firstName + " " + user.lastName;
    document.querySelectorAll(".location")[idx].innerHTML =
      user.address.state + ", " + user.address.city;
  });
}

async function getUsersInfo() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  arrOfUsers = data.users;
  fillCards(data);
}

function fillCards(data) {
  container.innerHTML = "";

  data.users.forEach((user, idx) => {
    container.append(cardTemplate.content.cloneNode(true));

    container.querySelectorAll(".img")[idx].src = user.image;
    container.querySelectorAll(".name")[idx].innerHTML =
      user.firstName + " " + user.lastName;
    container.querySelectorAll(".location")[idx].innerHTML =
      user.address.state + ", " + user.address.city;
  });
}

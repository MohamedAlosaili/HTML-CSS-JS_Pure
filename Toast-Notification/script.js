const showBtn = document.querySelector("#show-btn");
const messagesContainer = document.querySelector("#messages-container");

showBtn.addEventListener("click", showNewMessages);

let numbers = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

function showNewMessages() {
  const randIdx = Math.floor(Math.random() * numbers.length);

  const newMessage = document.createElement("div");
  newMessage.className = "message";
  newMessage.append(document.createTextNode(`Message ${numbers[randIdx]}`));
  newMessage.style.color = randomColor();

  messagesContainer.append(newMessage);

  setTimeout(() => messagesContainer.removeChild(newMessage), 5000);
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}

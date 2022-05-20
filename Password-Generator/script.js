const password = document.querySelector("#password");
const copyBtn = document.querySelector("#copy-btn");
const form = document.querySelector("#form");
const checkBoxes = document.querySelectorAll("[type='checkbox']");
const lengthEl = document.querySelector("[type='number']");

let passwordLength = lengthEl.value;
let newPassword = "";
let fullForm;

const passwordOptions = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxuz",
  numbers: "0123456789",
  symbols: "!@#$%^&*(){}[]=<>/,.",
};

form.addEventListener("submit", (e) => {
  fullForm = "";

  e.preventDefault();

  checkBoxes.forEach((checkBox) => {
    if (checkBox.checked) fullForm += passwordOptions[checkBox.id];
  });

  if (fullForm.length !== 0) {
    generatePassword();
  }
});

lengthEl.addEventListener("change", (e) => (passwordLength = e.target.value));

copyBtn.addEventListener("click", () => {
  if (newPassword.length !== 0) {
    navigator.clipboard.writeText(newPassword);
    sendCopiedMessage();
  }
});

function generatePassword() {
  newPassword = "";
  password.innerHTML = "";

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * fullForm.length);

    newPassword += fullForm[random];
  }
  console.log(newPassword);
  password.append(document.createTextNode(newPassword));
  console.log(password.innerHTML);

  return newPassword;
}

function sendCopiedMessage() {
  const copied = document.createElement("div");
  copied.innerHTML = `Password copied to clipboard <i class="fa-solid fa-check"></i>`;
  copied.className = "copied-message";

  document.body.append(copied);

  setTimeout(() => {
    copied.style.opacity = "0";
    setTimeout(() => copied.remove(), 500);
  }, 3000);
}

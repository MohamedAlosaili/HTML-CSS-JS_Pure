const randomCode = document.querySelector("[data-random-code]");
const inputs = document.querySelectorAll("[data-input]");

randomCode.innerHTML = `Verify Code: <span class="code" data-code>${getCode()}</span>`;
inputs[0].focus();
let enteredCode = "";
const length = inputs.length;

inputs.forEach((input, idx) => {
  input.addEventListener("keydown", (e) => {
    // console.log(+e.key);
    if (!isNaN(e.key) | (e.key == " ")) {
      input.addEventListener("input", () => {
        if (input.value.length === 1) {
          enteredCode += input.value;

          if (idx < length - 1) {
            input.nextElementSibling.focus();
          } else {
            input.blur();
            checkCode();
          }
        }
      });
    }
    if (e.key === "Backspace") {
      if (idx > 0) {
        input.value = "";
        input.previousElementSibling.focus();
      }
    }
  });
});

function checkCode() {
  const code = randomCode.querySelector("[data-code]");
  if (enteredCode === code.innerHTML) {
    resultPopup("right");
    console.log("right");
    console.log(enteredCode, code.innerHTML);
  } else {
    console.log("wrong");
    console.log(enteredCode, code.innerHTML);
    resultPopup("wrong");
  }
}

function resultPopup(result) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.setAttribute("data-popup", "");
  let text;
  if (result === "right") {
    text =
      "Your verification has been completed<br>Thank you for verifying your identity";
  } else {
    text = "Your verification failed <br>Please enter the currect code!";
  }
  popup.innerHTML = `
        <h3 class="title">${text}</h3>   
        <button class="btn" data-close>OK</button>
     `;
  const leyer = document.createElement("div");
  leyer.className = "leyer";
  document.body.append(popup, leyer);

  okButton();
}

function okButton() {
  document.querySelector("[data-close]").addEventListener("click", () => {
    document.querySelector("[data-popup]").remove();
    document.querySelector(".leyer").remove();
    location.reload();
  });
}

function getCode() {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 9);
  }
  return code;
}

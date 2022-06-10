const question = document.querySelector("[data-question]");
const form = document.querySelector("[data-form]");
const btn = document.querySelector("[data-btn]");

let arrOfQuestions = [];
let questionNumber = 1;
let correctAnswers = 0;

getQuestions();

btn.addEventListener("click", (e) => {
  const radios = document.querySelectorAll("[type='radio']");
  const check = Array.from(radios).find((radio) => radio.checked);
  if (check) {
    countCorrectAnswers(radios);
    questionNumber++;

    if (questionNumber <= arrOfQuestions.length) fillQuestions();
    else {
      seeResult();
      e.target.classList.add("reload");
      e.target.innerHTML = "Reload";
    }
  } else if (e.target.classList.contains("reload")) {
    location.reload();
  } else e.preventDefault();
});

async function getQuestions() {
  const res = await fetch("./question.json");
  const quiz = await res.json();

  arrOfQuestions = quiz;
  fillQuestions();
}

function fillQuestions() {
  if (questionNumber === arrOfQuestions.length) {
    btn.innerHTML = "Submit";
  }
  const questionObj = arrOfQuestions[questionNumber - 1];
  createQuestion(questionObj);
}

function createQuestion(questionObj) {
  question.innerHTML = questionObj.question;

  form.innerHTML = "";
  Object.keys(questionObj.answers).forEach((answer) => {
    if (questionObj.answers[`${answer}`] != null) {
      const choice = document.createElement("div");
      choice.className = "choice";
      choice.innerHTML = `
        <input type="radio" id="${answer}" name="choice">
        <label for="${answer}" class="label"></label>
      `;
      form.append(choice);
      document.querySelector(`[for="${answer}"]`).textContent =
        questionObj.answers[`${answer}`];
    }
  });
}
function countCorrectAnswers(radios) {
  let answer;
  Array.from(radios).filter((radio) => {
    if (radio.checked) answer = radio.nextElementSibling;
  });

  const correctAnswer = arrOfQuestions[questionNumber - 1].correct_answer;
  if (correctAnswer == answer.getAttribute("for")) {
    correctAnswers++;
  }
}

function seeResult() {
  question.innerHTML = `You answered ${correctAnswers}/${arrOfQuestions.length} questions correctly`;
  form.innerHTML = "";
}

const container = document.querySelector("[data-testimonial-box]");
const cardTemplate = document.querySelector("#card-template");

let arrOfTestimonials = [];
let testimonialNumber = 0;
getTestimonials();

async function getTestimonials() {
  const res = await fetch("https://testimonial.p.rapidapi.com/api", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "02012e21c7msha45727fac90fb33p1bccefjsnfb5e099523e0",
      "X-RapidAPI-Host": "testimonial.p.rapidapi.com",
    },
  });
  const data = await res.json();

  arrOfTestimonials = data;
  fillCard();
}

function fillCard() {
  const idx = testimonialNumber;
  container.innerHTML = "";

  container.append(cardTemplate.content.cloneNode(true));

  document.querySelector(".message").innerText = arrOfTestimonials[idx].message;
  document.querySelector(".avatar").src = arrOfTestimonials[idx].avatar;
  document.getElementById("name").innerText = arrOfTestimonials[idx].name;
  document.getElementById("position").innerText =
    arrOfTestimonials[idx].designation;

  interval();
}

function interval() {
  const timer = document.querySelector("[data-timer]");
  let timerWidth = 0;

  const interval = setInterval(() => {
    timer.style.width = `${(timerWidth += 2)}%`;

    if (parseInt(timer.style.width) >= 100) {
      clearInterval(interval);
      testimonialNumber++;
      if (testimonialNumber >= arrOfTestimonials.length) testimonialNumber = 0;
      fillCard();
    }
  }, 300);
}

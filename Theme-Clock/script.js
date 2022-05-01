const switchBtn = document.querySelector("#switch-mode");
const hour = document.querySelector("#hour-line");
const minute = document.querySelector("#minute-line");
const second = document.querySelector("#second-line");
const digitalClock = document.querySelector("#digital-clock");
const date = document.querySelector("#date");

switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark"))
    switchBtn.innerText = "Light Mode";
  else switchBtn.innerText = "Dark Mode";
});

setInterval(restTime, 1000);

function restTime() {
  const t = new Date();

  let currentSeconds = t.getSeconds();
  let currentMinutes = t.getMinutes();
  let currentHours = t.getHours();
  let period = "AM";

  const secondPosition = `${currentSeconds * 6}deg`;
  second.style.transform = `translateX(-50%) rotate(${secondPosition})`;

  const minutePosition = `${currentMinutes * 6}deg`;
  minute.style.transform = `translateX(-50%) rotate(${minutePosition})`;

  if (currentHours >= 12) period = "PM";

  if (currentHours > 12) currentHours -= 12;
  else if (currentHours === 0) currentHours = 12;

  const hourPosition = `${
    currentHours * 30 + Math.round(currentMinutes / 2)
  }deg`;
  hour.style.transform = `translateX(-50%) rotate(${hourPosition})`;

  if (currentMinutes < 10) currentMinutes = `0${currentMinutes}`;
  if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;

  digitalClock.innerHTML = `${currentHours}:${currentMinutes}<span class="seconds">${currentSeconds}</span> ${period}`;
}

restDate();
setInterval(restDate, 60000);
function restDate() {
  const d = new Date();

  const day = d.getDay();
  const month = d.getMonth();
  const monthDay = d.getDate();
  const year = d.getFullYear();

  console.log(day);
  console.log(month);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  date.innerHTML = `${days[day]}, ${months[month]} <span class="day">${monthDay}</span> ${year}`;
}

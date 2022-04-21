let leyer = document.querySelector(".leyer");
let loading = document.querySelector(".loading > .num");

let increasePrec = setInterval(increaseNumber, 30);

function increaseNumber() {
  let number = +loading.innerHTML;

  if (number === 100) clearInterval(increasePrec);
  else loading.innerHTML = ++number;
}

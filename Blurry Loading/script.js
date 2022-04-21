let leyer = document.querySelector(".leyer");
let loading = document.querySelector(".loading > .num");

let increasePrec = setInterval(increaseNumber, 30);

function increaseNumber() {
  let number = +loading.innerHTML;

  if (number === 100) clearInterval(increasePrec);
  else loading.innerHTML = ++number;
}

// This A Great Solve I See It On Github It's Refer To Question On StackOverFlow
// // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

/*
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min; // (0 - 0) * (0 - 1)
};
console.log(((55 - 0) * (0 - 1)) / (100 - 0) + 1);
*/

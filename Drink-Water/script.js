const remain = document.querySelector("#remain");
const litersRemained = remain.querySelector(".liters");
const drank = document.querySelector("#drank");
const glasses = document.querySelectorAll(".glass");
const remainValue = parseInt(litersRemained.innerText);

glasses.forEach((glass, index) => {
  glass.addEventListener("click", () => {
    let idx = index;

    if (idx === glasses.length - 1 && glass.classList.contains("done"))
      glass.classList.remove("done");
    else if (
      !glass.classList.contains("done") ||
      glasses[idx + 1].classList.contains("done")
    )
      glassFinished(idx);
    else glass.classList.remove("done");

    updateBottle();
  });
});

function glassFinished(idx) {
  glasses.forEach((glass, index) => {
    index <= idx ? glass.classList.add("done") : glass.classList.remove("done");
  });
}

function updateBottle() {
  let done = 0;
  glasses.forEach((glass) =>
    glass.classList.contains("done") ? done++ : false
  );

  let liters = (done * 250) / 1000;

  updateRemain(liters);
  updateDrank(liters);
}

function updateRemain(liters) {
  let Remained = remainValue - liters;

  litersRemained.innerText = `${Remained}L`;

  let precentage = (Remained / 2) * 100;

  remain.style.height = `${precentage}%`;
}

function updateDrank(liters) {
  let precentage = (liters / 2) * 100;

  drank.innerText = `${precentage}%`;

  drank.style.height = `${precentage}%`;
}

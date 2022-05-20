const standards = Array.from(document.querySelectorAll("[data-standard]"));

let first, second, temp;

// You can choose only Two of Three
standards.forEach((stand, idx) => {
  stand.addEventListener("click", (e) => {
    temp = second;
    if (!checkIfOneActive()) first = idx;
    else if (!checkIfAllActive()) second = idx;

    e.currentTarget.classList.toggle("active");

    if (checkIfAllActive()) {
      standards[first].classList.remove("active");
      first = temp;
    }
  });
});

function checkIfAllActive() {
  return standards.every((stand) => {
    if (stand.classList.contains("active")) return true;
    return false;
  });
}

function checkIfOneActive() {
  const check = standards.find((stand) => {
    if (stand.classList.contains("active")) return true;
    return false;
  });

  if (!check) return false;
  else return true;
}

const container = document.querySelector("[data-container]");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
for (let i = 0; i < 500; i++) {
  const square = document.createElement("span");
  square.className = "square";

  container.append(square);

  square.addEventListener("mouseenter", (e) => {
    changeColor(
      e,
      "0s",
      getRandomColor(),
      `0 0 2px ${getRandomColor()}, 0 0 3px ${getRandomColor()}`
    );
  });

  square.addEventListener("mouseleave", (e) =>
    changeColor(e, "2s", "#222", "0 0 2px #000")
  );
}

function changeColor(e, delay, color, boxShadow) {
  e.target.style.transition = delay;
  e.target.style.backgroundColor = color;
  e.target.style.boxShadow = boxShadow;
}

function getRandomColor() {
  return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}

/*
const hexCode = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++)
    color += hexCode[Math.floor(Math.random() * hexCode.length)];
  return `#${color}`;
*/

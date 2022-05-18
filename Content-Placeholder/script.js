const cardTemplate = document.querySelector("#card-template");
const skeletonTemplate = document.querySelector("#skeleton-template");
const container = document.querySelector("#cards-holder");

container.append(skeletonTemplate.content.cloneNode(true));

setTimeout(() => {
  container.innerHTML = "";
  container.append(cardTemplate.content.cloneNode(true));
}, 2000);

let boxes = document.querySelectorAll(".box");

let number;

window.addEventListener("scroll", animation);

function animation() {
  number = 0;

  boxes.forEach((box) => {
    let boxPosition = number * (box.scrollHeight + 10) + 73; // 73 = container padding + h1 height + h1 margin

    let insideWindow = window.scrollY + window.innerHeight - box.scrollHeight;

    if (boxPosition < insideWindow) box.classList.add("show");
    else box.classList.remove("show");

    number++;
  });
}
animation();

/* 
getBoundingClientRect() 
Another way to get spicific top of an element
*/

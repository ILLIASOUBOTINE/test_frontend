let carrousel = document.querySelector(".carrousel");
let arrowLeft = document.querySelectorAll(".arrow_left");
let arrowRight = document.querySelectorAll(".arrow_right");
let arr = [];

if (document.documentElement.clientWidth > 871) {
  arrowLeft = arrowLeft[0];
  arrowRight = arrowRight[0];
} else {
  arrowLeft = arrowLeft[1];
  arrowRight = arrowRight[1];
}

arrowLeft.addEventListener("click", (event) => {
  arr = Array.from(carrousel.children);
  let elem = arr[0].cloneNode(true);
  carrousel.children[0].remove();
  carrousel.append(elem);
});

arrowRight.addEventListener("click", (event) => {
  arr = Array.from(carrousel.children);
  let elem = arr[arr.length - 1].cloneNode(true);
  carrousel.children[arr.length - 1].remove();
  carrousel.children[0].before(elem);
});

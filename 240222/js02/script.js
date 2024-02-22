const arrows = document.querySelectorAll(".arrow");
const container = document.querySelector("#container");
let i = 0; //새로고침시 0부터 시작 기준값
const pics = [
  "pic-11.png",
  "pic-22.png",
  "pic-33.png",
  "pic-44.png",
  "pic-55.png",
  "pic-66.png",
];

container.style.backgroundImage = `url(./images/${pics[0]})`;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }

    container.style.backgroundImage = `url(./images/${pics[i]})`;
  });
});

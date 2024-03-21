const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
});
articles.forEach((article) => {
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});

console.log(circle, article);

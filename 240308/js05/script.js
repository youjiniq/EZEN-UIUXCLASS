const items = document.querySelectorAll("article");
for (let item of items) {
  item.addEventListener("mouseover", (e) => {
    console.log(e.currentTarget.querySelector("video").play());
  });  item.addEventListener("mouseleave", (e) => {
    console.log(e.currentTarget.querySelector("video").pause());
  });
}

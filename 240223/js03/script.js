// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode);

// document.body.appendChild(newP);

// const orderButton = document.querySelector("#order");
// const title = document.querySelector("#container h2");
// const orderInfo = document.querySelector("#orderInfo");

// orderButton.addEventListener("click", () => {
//   const newP = document.createElement("p");
//   const textNode = document.createTextNode("title.innerText");
//   newP.appendChild(textNode);
//   newP.style.fontSize = "1.2rem"
//   newP.style.color = "crimson"
//   orderInfo.appendChild(newP);
// }, {once: true});

// 주문하기 클릭시 h2가 orderinfo 공간에 출력

const newImg = document.createElement("img");

const srcNode = document.createAttribute("src");
srcNode.value = "https://img.vogue.co.kr/vogue/2023/08/style_64e6cac3ba0cd.jpeg"
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg)
console.log(newImg);

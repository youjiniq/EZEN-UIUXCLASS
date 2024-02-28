// 객체 값 반복 실행
// for .. in 문

const bag = {
  type: "bagpack",
  color: "blue",
  size: 15,
};

for (key in bag) {
  console.log(`${key}`);
}

const book1 = {
  title: "자바스크립트",
  pages: 648,
  buy: function () {
    console.log("이 책을 구입함");
  },
};

//ES6 문법

const keys = Object.keys(book1);
c
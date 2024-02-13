// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   alert("오늘도 파이팅입니다!");
//   //   // confirm("오늘도 파이팅 하시겠습니까?");
//   //   // prompt("당신의 이름을 입력해주세요!");
// });

// const name = "황유진";
// document.write("제 이름은 " + name + "입니다");

// var num;
// num = 7;

// var 변수는 실무에서는 거의 사용하지 않는 키워드 !
// var num = 7;
// document.write(num);

// JS 사용가능한 변수 선언 키워드 3가지
// const let var (*2015년 이전)
// var = variable = 변수 = 유연함 = flexable

// var num = 7;
// var num = 10;

// const : 재선언&재할당 원천적으로 불가능한 변수를 선언하고자 할때
// let : 원칙적으로 재선언 불가하지만 재할당은 가능함

// let str01 = "Life is good";

// str01 = "today is perfect";
// console.log(str01);

// const str = "test";
// console.log(str);

// const data = 5;
// const str = "hello";
// const boolean = true;

// const title = "최재천의 곤충사회";
// const price = 16200;
// const delivery = "free";
// const author = "최재천";
// const publishingDate = "2024-02-10";

// 객체 만든 것
const newBook = {
  title: "최재천의 곤충사회",
  price: 16200,
  delivery: "free",
  author: "최재천",
  cancel: 10000,
  publishingDate: "2024-02-10",
};

// 객체는 각각의 {key: value} 로 구성됨 => 프로퍼티 (property) 라고 함.
console.log(newBook.title);
const bookTitle = newBook.title;
document.write(bookTitle);

// 배열은 객체의 자식요소같은 것 ..
// const arr = [1, 2, 3, 4, 5];
// 배열로 나열하면 무엇인지 알기 힘듦
// const newBook01 = ["최재천의 곤충사회", 16200, "free", "최재천", "2024-02-10",10000];

// const result = prompt("당신의 나이를 입력하세요!");
// console.log(result);
//typeof = 자료형의 타입이 무엇인지를 알려줌
// console.log(typeof result);
// const tenYear = result + 10;
// console.log("당신의 10년뒤 나이는" + tenYear + "세 입니다.");
// console.log(`당신의 10년뒤 나이는 ${tenYear}세 입니다.`);

// const num = "10";
// console.log(typeof num);
//따옴표를 붙이면 문자임

// const result = confirm("오늘도 점심 드실거죠?");
// if (result === true) {
//   alert("맛있게 드세요!");
// } else {
//   alert("혹시 무슨일?");
// }
// console.log(result);

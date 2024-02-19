// prompt();
// alert();
// document.write();

//함수의 생김새 : 단어(=키워드)()

//    함수가 작동하려면 무엇이 필요할까
//    1) 함수를 구현 = 제작
//    2) 함수를 호출 = 실행

//   함수를 구현하려면 어떻게 해야할까
//   방법은 총 세가지
//   1) 클래스 함수를 구현하는 방법
//   2) 익명 함수를 구현하는 방법
//   3) 화살표 함수를 구현하는 방법 - 최신

//초급
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5; 반복문 사용해야 하는 예시

// 중급
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// } << 반복문

// 고급 (함수)
// 재활용 가능한 코드로 업그레이드
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log('1부터 ${n}까지 더하면 ${sum}입니다.')
// }

// calcSum(20);

// 클래스 함수 //
// const userNum01 = Number(prompt("첫번째 숫자를 입력하라"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하라"));

// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }
// sum(userNum01, userNum02);

// 익명함수 //
// const userNum01 = Number(prompt("첫번째 숫자를 입력하라"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하라"));

//   const sum = function (a,b){
//     const result = a + b;
//     alert(`두 수의 합은 ${result} 입니다`);
//   };
// sum(userNum01, userNum02);

// 화살표 함수 //
// const userNum01 = Number(prompt("첫번째 숫자를 입력하라"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하라"));

// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };
// sum(userNum01, userNum02);

// return 문

// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum; //바깥으로 끄집어 낼 때..?
// }

// calcSum(num);
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);

// const userNum01 = Number(prompt("첫번째 숫자"));
// const userNum02 = Number(prompt("두번째 숫자"));
// const userNum03 = Number(prompt("세번째 숫자"));

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(1, 2, 3));

// multiple(userNum01, userNum02, userNum03); //호출

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// calcSum(5);

// JS 코드 작성시 큰 이슈
// JS 큰 문제점 발견시 콘솔창을 통해 알려줌
// 아주 사소한 문제점은 알려주지 않음
// 버그 찾는 방법

// const hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// function greeting02() {
//   console.log(hi);
// }

// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change();
// console.log(hi);

// change();

// const factor = 5;

// function calc() {
//   return num * factor;
// }

// const num = 10;

// let result = calc();
// document.write(`result : ${result}`);

// js 권장사항
// var 보다는 let const 로 변수 선언하기

// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`);

// 가급적이면 전역 스코프의 변수선언은 피해라

// 그래서 var,let 보다는 const 에 적응해라

// 즉시실행 함수

// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// }

// (function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

//Hoisting 기법
//무언가를 끌어올리다
//  class 함수는 hoisting 가능 / 화살표와 익명 함수는 불가

// example();

// const example = () => {
//   console.log("hello");
// };

// const example01 = function () {
//   console.log("hello");
// }; 익명함수

// 화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호와 값을 반환시켜주는 return 문을 생략해도 작동한다.
// let hi01 = () => `안녕하세요`;
// console.log(hi());

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => a + b;

// 화살표 함수 생성 이유 : 1반복적으로 사용되는 function키 와 함수명을 생략하기 위하여 , 2js 의 근본없는 구현과 호출의 순서를 명확하게 정의하기 위한 목적 , 3함수의 실행문에서 중괄호와 return 문을 사용하지 않아도 구현할수 있도록 해주기 위한 목적

// 변수 선언시 let const var 사용하지 않으면 무조건 전역변수화 됨
// function greeting() {
//   hi = "hello";
// }

// const hi = "hello";
// function greeting() {}

// greeting();
// console.log(hi);

//콜백함수
//함수 안에 또다른 함수를 호출할 때 부르는 용어

// const btn = document.querySelector("button");
// // const display = () => {
// //   alert("오늘도 화이팅입니다");
// // };
// btn.addEventListener("click", () => {
//   alert("오늘도 화이팅입니다");
// });

// const showData = (name, age) => {
//   alert(`안녕하세요 ${name}님 나이가 ${age}살 이시네요!`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData);

// const addNum = (a, b) => a + b;
// //             매개변수
// console.log(addNum(1, 3, 5, 7));
// //                 인자값

//           (전개연산자...)
// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째로 좋아하는 과일은 ${second}`;
//   return str;
// };

// console.log(displayFavorites("사과", "포도", "토마토"));

// window 운영체제 => 내장함수 사용
// JS => 싱글스레드로 작동하는 객체지향 프로그래밍 언어
// 싱글 => 1 / 스레드 => 길 => 1차선 통행
// 1차선 => 사고

// <-> 멀티스레드 : 복수차선
// 동시성x / 비동기 처리x
// 로딩 스피너

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수

// const greeting = () => {
//   console.log("안녕하세요!");
// };

// 1000밀리초 = 1초

// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

// clearInterval(): 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수
//단락회로평가

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout() : 특정시간이 경과한 이후에 작동하게 만드는 함수
// heap / callstack / Que

setTimeout(() => {
  console.log("안녕하세요");
}, 5000);


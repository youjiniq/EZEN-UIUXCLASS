// js => 태생적으로 동기 처리 방식을 하도록 만드러짐
// 동기 : 순차적으로 무언가를 처리하는 뜻

// js 동기이지만 특정 상황엔 비동기처리가 가능해야하지 않을가

// js 비동기처리방식 총 3번에 걸쳐 업그레이드

// 1) 콜백함수
// 2) Promise 객체
// 3) async, await 키워드 사용

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 아무리 displayB함수의 호출이 displayC함수 호출보다 먼저 발생했어도 displayC함수의 결과값이 먼저 나오게 할수만 있다면 자바스크립트언어를 비동기처리가 된것처럼 만들어낼수 있는 것이다

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// const display = (result) => {
//   console.log(`${result} 준비 완료`);
// };

// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    se
  }, 1000);
};

displayLetter();

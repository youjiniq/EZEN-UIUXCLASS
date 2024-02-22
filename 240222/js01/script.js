// window.onload = alert("안녕하세요!");

// const button = document.querySelector("button");

// const btnFnc = () => {
//   window.document.body.style.backgroundColor = "darkolivegreen";
// };

// button.onclick = btnFnc;

// const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = `
//   code : ${event.code},
//   key : ${event.key}
//   `;
// };

//외부 스크립트 방법
// const button = document.querySelector("button");

// button.onclick = () => {
//   document.body.style.backgroundColor = "darkolivegreen";
// };

//이벤트 리스너 -콜백함수 가능해서 많이 사용

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "darkolivegreen";
// });

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
//input에 아이디를 주고 해쉬로 불러와도 됨

// form.addEventListener("submit", () => {

// }); 첫번째 방법 , 제출할 데이터가 없으므로 과한 방법 , 아래처럼 버튼에 이벤트를 주면 됨

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const word = document.querySelector("input[type='text']").value;
//   const result = document.querySelector(".result");

//   const count = word.length;
//   result.innerText = count;

//   if(count >= 10) {

//   } else {
//     alert("아이디는 10자 이상이어야 합니다!")
//   }
// });
// 실제 검색값=사용자가 넣은값을 알기위해 value 로 확인, 넣은 값이 word라는 변수명 안에 들어오게 됨
// result라는 클래스 값 가져와서 result라는 변수명에 넣음
// count 변수명에 단어 길이를 넣어줌 (패스워드 몇 자 이상의 조건문 주기)
// 문자열의 길이 확인

// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트 위치 : ${e.pageX}, ${e.pageY}`);
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code:${e.code},
  key: ${e.key}
  `;
});

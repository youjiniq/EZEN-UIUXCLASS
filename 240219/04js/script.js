// 사용자로부터 숫자 하나를 받고 해당 숫자가 양수인지 음수인지 0인지 판단해서 알림창을 활용하여 이에 대한 결과를 출력해주세요, 반환값이 숫자일 경우에만 함수를 실행시켜주세요

// 숫자 빋기 , 양수 음수 0 판단하는 식 쓰기, 결과 출력하기,

// const userNum = prompt("숫자를 입력하세요");

// if (userNum > 0 ===) {
// alert("양수");
// }
// else (userNum < 0 ===) {
//   alert("음수");
//   }

const number = parseInt(prompt("숫자를 입력하세요"));

const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수입니다`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다`);
  } else {
    alert(`${n}은 0입니다`);
  }
};

// console.log(isNaN("hi")); // 숫자면  false
if (!isNaN(number)) {
  isPositive(number);
}

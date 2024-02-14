// 사용자에게 키와 몸무게의 정보를 받아서 사용자가 현재 적정체중인지 확인 후 웹브라우저 화면에 출력하기
// 만약 적정체중이라면 " 적정체중이시네요. 축하드립니다 "
// 아니라면 " 조금만 더 노력해주세요 "
// 적정체중 구하는 공식 = (본인키 - 100) * 0.9
// 적정체중 구하는 공식을 통한 결과값+- 5kg까지 허용

// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const btn = document.querySelector("#button");

// btn.addEventListener("click", function () {
//   const averageweight = (height - 100) * 0.9;
//   const resultweight =
// });

// 키값 받아온다
// 몸무게값 받아온다
// 받아온 키와 몸무게 값을 가지고 적정체중을 구한다
// 적정체중 구한 이후에 +- 5kg의 범위를 설정한다
// 적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다
// 최종 결과값을 웹브라우저 화면에 출력한다\

// const userName = prompt("당신의 이름은?", "ex.홍길동");
// const userHeight = Number(prompt("당신의 키는?", "ex.180"));
// const userWeight = Number(prompt("당신의 몸무게는?", "ex.70"));

// const normalWeight = (userHeight - 100) * 0.9;
// let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;
// result = result
//   ? "적정체중이시네요! 축하드려요."
//   : "적정체중이 아닙니다. 노력해주세요!";
// document.write(`${userName}님 ${result}`);

// 사용자로부터 오늘 하루동안 지출한 교통비와 식비, 음료비를 받아 계산한 후 해당 값이 1만원을 초과한 경우에는 "00원 초과하였습니다. 조금만 더 노력해주세요!" 라고 웹브라우저 화면에 출력해주시고 , 만약 1만원을 초과하지 않은 경우에는 "00원 남았습니다. 돈관리 잘하셨어요!" 라고 출력

// 1. 교통비 식비 음료비 받아오기
// 2. 세개를 더한 값 구하기
// 3. 만원 초과할 경우와 아닌 경우의 문자열 구분
// 4. 결과값

const money1 = Number(prompt("교통비", "ex.3000"));
const money2 = Number(prompt("식비", "ex.5000"));
const money3 = Number(prompt("음료비", "ex.2000"));

const allmoney = money1 + money2 + money3;
let result = allmoney < 10000;
const result1 = 10000 - allmoney;
const result2 = allmoney - 10000;

result = result 
? '${result1}원 남았어요 돈관리 잘하셨어요'
: '${result2}원 초과했어요 좀 더 노력해주세요';
document.write(result);

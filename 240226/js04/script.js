// 사용자로부터 "오늘부터 며칠간 만보걷기"를 했는지를 물어보고 임의의 숫자를 받으세요
// "00일 연속 달성"이 출력될수 있도록 해주세요

const userQuery = prompt("걷기 시작일을 입력하세요", "ex.2024-01-26");

const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;

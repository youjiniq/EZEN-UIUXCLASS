// 사용자가 이메일 주소를 입력하면 result 공간에 사용자의 이메일 정보를 출력하게 해주세요
// 단 이메일 주소중 @ 앞의 내용을 3자리까지만 출력하게 해주세요 그리고 4번째 자리부터는 ...온점으로 표기해주세요
// ex ) abcdef@naver.com   =>   abc...@naver.com
// @ 중심으로 앞뒤 두쪽으로 쪼갠다
// split 함수
// 앞쪽 문자열에서 1~3번째 문자열까지만 출력
// substring 혹은 slice 함수
// 뒤쪽 문자열은 그대로 보관하고 있다가 앞쪽문자열과 합친다

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const button = document.querySelector("#submit");
const result = document.querySelector("#result");

// const substring = str.substring(0, 2);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = "";
  let domain = "";

  if (userEmail.value !== "") {
    userName = userEmail.value.split("@")[0];
    userName = userName.substring(0, 3);
    domain = userEmail.value.split("@")[1];
    result.innerText = `${userName}...@${domain}`;
    userEmail.value = "";
  }
});

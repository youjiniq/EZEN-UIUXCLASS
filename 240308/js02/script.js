// input 태그를 통해 사용자에게 숫자 받기
// 사용자가 숫자를 입력하고 입력버튼을 클릭하면 다음과 같은 조건에 따라서 결과가 출력되게 할것
// 조건 : 만약 10보다 큰 숫자를 입력했다면 알림창을 통해서 "10보다 작은 숫자를 입력하세요" 를 나오게 하고 만약 10보다 작은 숫자를 입력했다면 result 공간에 해당 숫자가 출력되도록 할 것.
// 단, 해당 코드는 try, catch, finally 문을 활용해서 작성

// try문 : 실행문을 작성하는 공간
// catch함수 : 만약 에러 발생시 에러 메세지 출력하는 함수
// finally문 : 상단 실행문이 정상이든 에러든 무조건 실행되는 공간

const userNumber = document.querySelector("input[type='text']");
const button = document.querySelector("form");
const resultNumber = (e) => {
  e.preventDefault();
  let n = userNumber.value;

  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요";
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n >= 10) {
      throw "10보다 작은 숫자를 입력하세요";
    }
  } catch (err) {
    alert(err);
  } finally {
    userNumber.value = "";
  }
};

button.addEventListener("submit", resultNumber);

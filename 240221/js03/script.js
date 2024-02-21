const n = document.querySelector("#number1");
const m = document.querySelector("#number2");
const button = document.querySelector("form input[type='submit']");
const result = document.querySelector("#result");


function getGCD(n, m) {
  const max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(n.value, m.value);
};



// 사용자가 입력한 두개의숫자 찾아오기 , 출력될 공간 정의하기, 계산하기 버튼 클릭했을 때 result 공간에 값을 출력해주기 , 값을 출력하기 위한 계산식 필요, 최대공약수에 대한 개념 필요 


// ???? const와 let의 확실한 차이 , 혼용 가능한 경우는 ?

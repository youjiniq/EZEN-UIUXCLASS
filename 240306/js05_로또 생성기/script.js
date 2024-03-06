const button = document.querySelector("button");
const result = document.querySelector("#result");

// 로또 규칙
// 한 번 추첨 시 6개의 숫자 나와야함 (반드시 중복 x)

// 각각의 6개의 숫자 : 최대 숫자 45
// 1~45까지의 구간의 숫자, 랜덤 => 수학객체 random() * 45

// 반복문 6번 반복

// 중복되면 안되므로 Set()

// result 에 출력

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
};

button.addEventListener("click", lottoPlay);

// const form = document.querySelector("form");
// const heightInput = document.getElementById("height");
// const weightInput = document.getElementById("weight");
// const result = document.querySelector(".result");
// 키 몸무게값 제출
// const bmi = calculateBMI(height, weight);
// 비만도 연산식 함수(height,weight) 만들기
// 연산식 함수에 따른 각각의 결과값(bmi) 나타내기
// result

// 1 height , weight 값 정의하기
// 2 button 정의하기
// 3 button 이벤트 연산 작업하기
// 3-1 정의한 height , weight 값으로 연산 작업 후 , 변수명을 할당하기
// 3-2 함수 와 조건문 으로 연산 작업
// 4 result 공간에 출력하기

const form = document.querySelector("form");

const display = (bmi) => {
  const result = document.querySelector(".result");
  
  let group;
  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }

  result.innerText = `${bmi} -> ${group} 입니다.`;
};

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
  }
  const bmi = calculate(weight, height);

  display(bmi);
  heihgtInput.value = "";
  weightInput.value = "";
};

form.onsubmit = formHandler;

// 자료형
// 변수에 담겨질 수 있는 값의 형태를 의미
// 숫자형 / 문자열 / 논리형 / 객체 / 배열 / 심벌 / 함수
// 객체 => { key: value } => property

// 객체 > 배열

// let arr = [1, 2, 3, 4];
// let arrStr = ["a", "b", "c"];
// let arr01 = [];

// index & length
// 사람 => 값을 입력 => 0,1 인식 가능
// 비트로 인식, 0과 1만 인식 가능
// 바이트

// JS = 객체 지향 프로그래밍 언어
// "절차 지향" => 고차함수

// console.log(arr[3]);
// console.log(arrStr.length);

// 심벌 - 유일무이한 값을 저장하고 관리하고 싶은 경우 사용

let var1 = Symbol();
let var2 = Symbol();
// 비교연산자 => 서로 다른 피연산자(var1,var2)를 비교할 때 사용하는 연산자
// console.log(var1 === var2); 같지 않음 , false

// e-commerce = 쇼핑몰
// 회원들의 개인정보 =>

let id = Symbol();

const member01 = {
  name: "kim",
  [id]: 12345,
};

member01.id = 6789;
console.log(member01);

const member02 = {
  name: "kim",
  id: 12345,
};

console.log(member02);

// id 값 구별 위해 [] 사용 , 유일무이한 값이 됨 , 데이터나 보안 관련

// const member02 = {
//   name: "Park",
//   id: "abc",
// };

let grade = Symbol("grade");
// grade라는 심벌을 변수안에 할당함
member01[grade] = "VIP";
// member01 이라는 객체 안에 grade라는 라벨을 넣음 , vip 라는 문자열의 값을 넣음 , 키를 생성
console.log(member01);

const fnc = function () {
  console.log("test");
};
// 익명함수

// 함수는 원래는 이렇게 작성하는 것이 기본문법 , 위에서는 fnc01이라는 함수 이름을 생략했으므로 익명함수라고 함
function fnc01() {}

//promt() : 사용자에게 어떤 값을 받아올 수 있도록 해주는 함수.
// 사용자가 아무리 숫자를 입력 해도 = > 자동으로 문자열로 형변환이됨
// 문자열 "+" 숫자형 을 하면 => 문자열이 됨

// let str = "20";
// let num = 10;

// let result = Number(str) + num;
// 숫자끼리 덧셈 하고싶다면 Number함수 씌워줌 , 의도적으로 형변환 한것
// Number() :매개변수로 들어오는 값을 숫자로 형변환
// console.log(result);

// let result01 = str - num;
// console.log(result01);
// 뺼셈,나누기,곱셈 연산자에서는 형변환 안일어남 , 오직 덧셈 연산자에만 공식 해당 됨

// console.log(Number(true));
// 1 = 참 true , 0 = 거짓 false
// console.log(Number("hi!"));
// 문자는 숫자로 바꾸지 못함 -> NaN

// console.log(Number("20"));
// 따옴표 안 숫자는 숫자로 변환함

// Number() VS parseInt() parseFloat()
// Number 는 매개변수 안에 뭐가 들어오든 최대한 숫자로 바꿈 가장 큰 개념
//

// const userAge = parseInt(prompt("당신의 나이를 입력하세요!"));
//userage 라는 식별자 안에 나이 라는 변수 담음
// console.log(typeof userAge);

// 소괄호 안에 들어온 값을 무조건 숫자로 다 바꿀수 없음 , => 숫자를 정수로 바꿔주는 역할임 , 논리형 값을 바꾸지 못함
// console.log(parent(false));

// 소괄호 안에 들어온 값을 실수의 형태로 바꿔주는 역할
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요!"));
//prompt 를 거치면 무조건 문자가 됨

// console.log(userHot);

// let num = null;
//null이라는 논리형 값 할당

// console.log(typeof num.toString());

// 쇼핑몰 10만개 의류 => 바코드 (*문자)
// tostring : 숫자를 문자로

// console.log(typeof String(null));
// tostring 보다 더 큰 개념 , 숫자를 문자로 바꿈

// null & undefined

console.log(Boolean("hi"));
// null , undefined, false 만 false이고 나머지는 다 true로 출력

//사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 웹브라우저 화면에 섭씨온도를 출력해주세요 .

// 공식 : 섭씨온도 = (화씨온도-32) / 1.8

const fah = Number(prompt("화씨온도를 입력하세요"));
const cel = ((fah - 32) / 1.8).toFixed(1);

document.write(`화씨 ${fah}도는 섭씨${cel}도 입니다`);

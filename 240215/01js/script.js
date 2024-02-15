// if(//조건식이 참이어야) {
//   //실행문 실행됨
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// const score = Number(prompt("프로그램 점수 : "));

// // 예외조항 처리
// // 중첩사용 가능 = 반복해서 사용할 수 있음
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }

// 조건문 활용하여 사ㅏ용자에게 어떤 숫자를 받아서 그 숫자가 짝수인지 홀수인지를 확인한 후 알림창을 활용하여 사용자에게 짝수 혹은 홀수입니다 라는 메시지를 출력하세요

// 1 숫자 받기 2 짝홀 결정하는 식 쓰기 3 조건문으로 짝이면 짝수 홀이면 홀수 출력하기

// const userNum = prompt("숫자를 입력하세요");

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   if (userNum % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다!");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   resetnum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다");
// } else {
//   alert("취소하셨습니다.");
// }

// camel 표기법
// snake 표기법 : user_picknum
// 헝가리언표기법 : Userpicknum

// 식별자 원칙

// 가장 좋은 변수명(식별자)은 명시적 & 직관적
// 1) 예약어 ( JS & window 에서 이미 사용중인 고유명사 )
// document, window,
// 2) 변수명 작명 시 가장 앞에 사용할 수 있는 것들 : $,_,영문자 가능 (* 숫자 / 특수문자 절대 불가 )
// 3) 변수명은 대소문자 구분함

// 사용자에게 1~12 숫자 중 하나를 받으세요 . 그리고 전달받은 숫자에 따라서 다음과 같은 알림 메세지가 출력되게 해주세요 .

// 사용자가 입력한 숫자 : 9~11 이라면 독서의 계절 가을이네요 라고 출력
// 사용자가 입력한 숫자 : 6~8 이라면 여행하기 좋은 여름이네요 라고 출력
// 사용자가 입력한 숫자 : 3~5 이라면 햇살 가득한 봄이네요 라고 출력
// 사용자가 입력한 숫자 : 12~2 이라면 스키의 계절 겨울이네요 라고 출력

// let month = prompt("현재는 몇월인가요?", "ex.2");

// if (month != null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요");
//   } else if (month >= 6 && month <= 8) {
//     alert("여름이네요...");
//   } else if (month >= 3 && month <= 5) {
//     alert("봄이네요...");
//   } else {
//     alert("겨울이네요...");
//   }
// }

// const userNum = prompt("숫자를 입력하세요");

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   if (userNum % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다!");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// id 와 pw 값 받으세요 그리고 해당 id 와 pw 값이 다음과 같다면 반갑습니다 알림 메시지 출력해주세요

// id : ezenit / pw : 1234

// 만약 id만 일치하고 pw 틀렸을 경우 "비밀번호를 확인해주세요" 라고출력, 만약 id와 pw 둘다 틀렸을 경우 "아이디를 확인해주세요" 라는 알림메시지 출력

// 1 id와 pw 값 받기
// 2 id 와 pw 값 일치할 경우 반갑습니다 출력

// const id = "ezenit";
// const pw = 1234;

// const userId = prompt("당신의 아이디는?");

// if (userId === id) {
//   const userPw = Number(prompt("당신의 비밀번호는?"));
//   if (userPw === pw) {
//     alert(`${userId}님 반갑습니다`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다");
//   location.reload();
// }

// switch(// 조건식 => 참) {
//   case 1 : 실행문
//   break
//   case 2 : 실행문
//   break
//   case 3 : 실행문
//   break
//   case 4 : 실행문
//   break
//   case 5 : 실행문
//   break
// }

// const subject = prompt("신청할 과목을 선택하세여", "1-HTML, 2-CSS, 3-JS");

// if (subject != null) {
//   switch (subject) {
//     case "1":
//       alert("'HTML을 신청하셨습니다");
//       break;
//     case "2":
//       alert("'CSS을 신청하셨습니다");
//       break;
//     case "3":
//       alert("'JS을 신청하셨습니다");
//       break;
//     default:
//       alert("잘못 입력하셨습니다");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다");
// }

// 사용자에게 즐겨찾는 쇼핑물 물어보고 답을 받아주세요
//후보 : 쿠팡 G마켓 11ST 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면 prompt창에 확인버튼 누르는 순간 해당 쇼핑몰로 바로 이동하게 만들어주세요

// window 객체안에 location 객체는 어딘가로 이동하도록 해주는 객체
// location 객체안에 href속성=> 경로 지정 속성
// 쿠팡을 사용자가 선택했다면 location.href = "https://www.coupang.com" 결과값 설정하면 쿠팡 사이트로 이동 가능

// const buy = prompt("즐겨찾는 쇼핑몰은?");

// if(buy != null) {
//   switch (buy) {
//     case "1" :
//       alert("쿠팡")
//       break
//       case "2"
//   }
// }
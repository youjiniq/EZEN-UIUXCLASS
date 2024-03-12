// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// async function displayHello01() {
//   console.log("Hello");
// }

// displayHello();

// 순수 Promise 객체를 활용한 비동기처리 실행문

// const whatYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatYourFavorite().then(displaySubject).then(console.log);

// async 예약어를 활용하여 promise 객체 생성 및 사용

// async function whatsYourFavorite() {
//   const fav = "Javascript";
//   return fav;
// }

// async function displaySubject() {
//   return `Hello, ${subject}`;
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

async function whatsYourFavorite() {
  const fav = "Typescript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();

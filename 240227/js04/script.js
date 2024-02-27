// 짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕
// 상기 메뉴중 랜덤으로 1개 선택해서 웹 브라우저에 출력

// const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
// const randomMenu = menu[Math.floor(Math.random() * menu.length)];
// console.log(randomMenu);

// console.log(`선택된 메뉴: ${randomMenu}`);

const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
const menuNum = Math.floor(Math.random() * menu.length);
const result = menu[menuNum];
document.write(result);

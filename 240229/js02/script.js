// const str = "hello";
// const greeting = "안녕하세요!";
// const str01 = "Good Morning!";
// console.log(str.length);
// console.log(greeting.length);
// console.log(str01.charAt(0));

// const string = prompt("문자열을 입력하세요!");
// const letter = prompt("어떤 문자를 체크하시겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다!`);

const str1 = "Good morning, everyone. Beautiful morning.";
console.log(str1.indexOf("morning"));
console.log(str1.indexOf("evening"));
// console.log(str1.indexOf("morning",firstIndex + 1));

console.log("==== startswith ====");
const str2 = "Hello, everyone";
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("He"));
console.log(str2.startsWith("Hello, ev"));
console.log(str2.startsWith("el", 1));
console.log(str2.startsWith("o", 4));

console.log("==== includes ====");
console.log(str2.includes("every"));
console.log(str2.includes("one"));

console.log("==== trim methods ====");
const str3 = "ab cd ef";
const str_3 = " ab cd ef";
console.log(str3);
console.log(str_3);
console.log(str_3.trim());
console.log(str_3.trimStart());
console.log(str_3.trimEnd());

console.log("==== Uppercase / Lowercase ====");
let str4 = "Good Morning";
console.log(str4.toUpperCase);
console.log(str4.toLowerCase);

console.log("==== substring ====");
console.log(str4.substring(5, 8));
console.log(str4.substring(5));
// 두번째 매개변수의 앞까지만 찾아옴
// 매개변수 하나일 경우 그 매개변수의 끝까지 찾아옴
// 음수값 인식 못함 , 음수값을 0으로 치환

console.log("==== slice ====");
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 12));

console.log("==== split ====");
const str5 = "Hello everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1);
console.log(array2);

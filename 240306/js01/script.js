// Map 객체

// arr.map()

// 이유
// 1) js객체 => 일반객체 > 배열객체

// 2) 일반객체
// 장점 : key, value 값을 가지고 있는 프로퍼티
// 데이터 체계적으로 보관 관리 사용
// 단점 : for...in => 객체 안에 있는 value값만을 찾아와서 직접적으로 반복문을 돌릴 수 있는 방법x
// 단점 : 객체안에 구성되어있는 아이템들은 배열처럼 인덱스 번호를 할당받지 못한다

//3) 배열객체
// 장점 : 배열안에 포함되어 있는 아이템들이 고유의 인덱스값을 가지고 있으며 for문을 활용한 반복문으로 업무의 효율성 극대화
// 단점 : 객체처럼 key와 value 형태로 구성된 체계적인 데이터 관리 x

// Solution : 일반객체 & 배열객체의 장점만 모아서 하나로 만들면 어떨까 -> Map

// key , value 값으로 구성된 아이템을 가질 수 있다
// 각 아이템별 인덱스 값을 할당
// for 의 반복문 활용하여 언제든지 값을 추출

// const bag = new Map();
// bag.set("color", "red");
// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capcity", "300ml"],
]);
console.log(myCup);

myCup.set("type", "mini").set("purpose", "daily");
// 추가시  set 쓰기
console.log(myCup);

console.log(myCup.size);

console.log(myCup.get("color"));
console.log(myCup.has("color"));
console.log(myCup.has("variable"));
myCup.delete("type");
// myCup.clear();
// clear 와 delete 의 차이
console.log(myCup);

console.log(myCup.keys());

for (let key of myCup.keys()) {
  console.log(key);
}

// 배열과 같이 내부 아이템을 한개씩 찾아와서 반복 순회할 수 있도록 해주는 객체 => 이터레이터 객체

// for (let value of myCup.values()) {
//   console.log(value);
// }

// for (let value of myCup.entries()) {
//   console.log(value);
// }

// Map 객체 => 데이터의 중복을 막을 수 없다
// 동일하 데이터 하나의 객체안에 들어오면 안되는 상황

// 일반객체+배열객체+Map+데이터중복x => Set()

// const numSet1 = new Set();
// numSet1.add("one").add("two");

// console.log(numSet1);

const numSet2 = new Set([1, 2, 3]);

console.log(numSet2);
console.log(numSet2.has(2));
numSet2.delete(1);
numSet2.clear();
console.log(numSet2);

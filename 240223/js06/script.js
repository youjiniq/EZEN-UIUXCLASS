// const title = document.querySelector("#title")
// const author = document.querySelector("#author")
// const button = document.querySelector("input[type='submit']")
// const button2 = document.querySelector("input[type='reset']")
// const booklist = document.querySelector("#booklist")

// title.addEventListener("click", function() {

// })
// author.addEventListener("click", function(){

// })

// 1 제목과 저자의 값을 찾아와야한다
// -  input > value

// 이벤트가 작동하도록 해주는 저장하기 버튼 정의
// 폼form 선택하고 서브밋submit 할것인지
// 버튼을 선택하고 클릭할것인지
// e.preventDefault()

// 2. 액션에 대한 리액션(이벤트) - 찾아온 값을 출력하도록 해주는 이벤트함수 : addEventListner

// 3 출력할 공간의 정의
//  queryselector

// 4 삭제하기 버튼 정의
// createElement, appendChild 필요

// 삭제하기 버튼이 복수의 갯수로 생성 => 반복문 사용하여 클릭한 삭제버튼 찾아오기 위하여 => this (클래스함수 vs 화살표함수)

// 5 삭제하기 버튼 클릭 시 목록 삭제 이벤트 함수 필요
// parentNode , removeChild  필요

const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `${title.value} - ${author.value}
  <span>삭제</span>`;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});

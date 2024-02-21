// 1 사용자가 입력하는 값 찾아오기 위해 입력창 정의
// 2 사용자가 클릭할 버튼 정의
// 3 버튼을 클릭했을 때 이벤트에 대한 기능 정의
// 4 li 태그 dom에서 생성 => 입력창을 통해 전달받은 값을 li태그 삽입 => ul 태그의 자식 요소
// 5 사용자가 입력한 값을 출력할 공간에 대한 정의

//1
const form = document.querySelector("form");
//2
const input = document.querySelector("form input[type='text']");
//5
const ul = document.querySelector("ul");

const formFnc = (e) => {
  e.preventDefault();
  if(input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
};

form.onsubmit = formFnc;

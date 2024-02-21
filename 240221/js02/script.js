// 버튼 찾기 , 영역 찾아오기, 버튼에 이벤트 부여,
const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};

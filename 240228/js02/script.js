// 원기둥의 부피 = 밑면적 x 높이
// 밑면적 = 파이 x (지름 / 2 )^2

// 생성자 함수 혹은 class를 활용해서 코드 작성 추천

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다.`)

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = this.height = cylinderHeight;
  }

  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2)
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;
});

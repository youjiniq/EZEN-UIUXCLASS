const canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90,250,310,10,350,100)
ctx.stroke();

// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, (Math.PI / 180) * 360);
// ctx.stroke();

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.stroke();
// ctx.closePath();

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fill()
// ctx.stroke()

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.stroke();

// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.strokeStyle = "black";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);

// js 세계관
// 시간 : 1초 / 밀리초 1000
// 각도 : 1도 45도 => deg x
// Radian => 라디언 / 래디언
// 1래디언 = 우리가 일상에서 이야기하는 180도 = (PI/180) * 180 => (PI * 1)
// 2래디언 = 360도 = (PI/360) * 360 => (PI * 2)

const radians = (Math.PI / 180) * 180;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);
//face
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// left eye
ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.fill();
ctx.stroke();

// left eye circle
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(120, 80, 5, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// // right eye
// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.strokeStyle = "green";
// ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 360, false);
// ctx.fill();
// ctx.stroke();

// // right eye circle
// ctx.beginPath();
// ctx.fillStyle = "black";
// ctx.arc(180, 80, 5, 0, (Math.PI / 180) * 360, false);
// ctx.fill();

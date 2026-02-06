const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let dx = 3;
let dy = 2;
const radius = 20;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面を消す
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;

    if(x + radius > canvas.width || x - radius < 0) dx = -dx;
    if(y + radius > canvas.height || y - radius < 0) dy = -dy;

    requestAnimationFrame(draw); // ずっと繰り返す
}

draw();
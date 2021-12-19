var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// var ballRadius = 10;
// var orbitHeight = 100;
var dtheta = 0.01;
x = canvas.width / 2;
y = canvas.height / 2;
// var x_orbit = (orbitHeight * Math.cos(theta)) + x;
// var y_orbit = (orbitHeight * Math.sin(theta)) + y;
// var dtheta = -0.01;
// var ballColor = 'red';

class Planet {
    constructor(orbitHeight, theta, dtheta, radius, color) {
        this.orbitHeight = orbitHeight;
        this.theta = theta;
        this.dtheta = dtheta;
        this.radius = radius;
        this.color = color;
    }

    calcPos() {
        const coords = [0, 0];
        coords[0] = this.orbitHeight * Math.cos(this.theta) + x;
        coords[1] = this.orbitHeight * Math.sin(this.theta) + y;
        return coords;
    }
}

var earth = new Planet(100, 0, -0.001, 10, 'blue');
var mars = new Planet(250, 0, -0.0015, 7, 'red');
var jupiter = new Planet(380, 0, -0.0002, 18, 'orange')

// console.log(earth.theta);
function drawSun() {
    ctx.beginPath();
    ctx.arc(x, y, 45, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}


function drawBall(x1, y1, r1, color1) {
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2);
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun();
    earth.theta += earth.dtheta;
    mars.theta += mars.dtheta;
    jupiter.theta += jupiter.dtheta;
    drawBall(earth.calcPos()[0], earth.calcPos()[1], earth.radius, earth.color);
    drawBall(mars.calcPos()[0], mars.calcPos()[1], mars.radius, mars.color);
    drawBall(jupiter.calcPos()[0], jupiter.calcPos()[1], jupiter.radius, jupiter.color);
}

setInterval(draw, 10);
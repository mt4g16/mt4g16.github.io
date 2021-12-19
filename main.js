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
    constructor(orbitHeight, theta, radius, color) {
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

var earth = new Planet(100, 0, 10, 'blue');

console.log(earth.theta);

function drawBall() {
    ctx.beginPath();
    ctx.arc(earth.calcPos()[0], earth.calcPos()[0], earth.radius, 0, Math.PI * 2);
    ctx.fillStyle = earth.color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    earth.theta += dtheta;
    console.log(earth.theta);
    drawBall();
}

setInterval(draw, 10);
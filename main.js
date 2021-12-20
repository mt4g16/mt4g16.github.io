var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dtheta = 0.01;
x = window.innerWidth / 2;
y = window.innerHeight / 2;

function setCanvas() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    x = 3 * window.innerWidth / 4;
    y = window.innerHeight / 2;
    // ctx.translate(width / 2, height / 2); // now 0,0 is the center of the canvas.
}

function resizeCanvas() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.translate(width / 2, height / 2); // now 0,0 is the center of the canvas.
}

// window.addEventListener('resize', resizeCanvas, false);

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

var mercury = new Planet(55, 10, -0.003, 4, '#998e8d');
var venus = new Planet(70, 2, -0.0045, 6, '#bebf8e');
var earth = new Planet(150, 8, -0.001, 10, '#3260a8');
var mars = new Planet(250, 40, -0.0015, 7, '#a84e32');
var jupiter = new Planet(380, 20, -0.0002, 18, '#c48114')
var saturn = new Planet(400, 44, -0.0002, 14, '#6b5e23')
var uranus = new Planet(500, 12, -0.0002, 12, '#709187')
var neptune = new Planet(550, 10, -0.0002, 13, '#145eb8')

// var asteroid = new Planet(1000, 10, -0.01, 2, 'gray')

// console.log(earth.theta);
function drawSun() {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#d3d921';
    ctx.fill();
    ctx.closePath();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var Asteroids = {};

// circles["Mercury"] = new Circle(0.05, sun_x0, sun_y0, 89.9691, .004, 'red', 252.25166724);

const thetaStart = Array.from({ length: 400 }, () => Math.floor(Math.random() * 400));

thetaStart.forEach(myFunction);
function myFunction(value, index, array) {
    Asteroids[index] = new Planet(getRndInteger(950, 1050), value, -0.0003, 2, 'gray');
}

function drawKuiper() {
    Object.keys(Asteroids).forEach(key => {
        // console.log(key);        // the name of the current key.
        // console.log(Asteroids[key]); // the value of the current key.
        drawPlanet(Asteroids[key].calcPos()[0], Asteroids[key].calcPos()[1], Asteroids[key].radius, Asteroids[key].color);
    });
}

function drawPlanet(x1, y1, r1, color1) {
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2);
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    setCanvas()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun();
    mercury.theta += mercury.dtheta;
    venus.theta += venus.dtheta;
    earth.theta += earth.dtheta;
    mars.theta += mars.dtheta;
    jupiter.theta += jupiter.dtheta;
    saturn.theta += saturn.dtheta;
    uranus.theta += uranus.dtheta;
    neptune.theta += neptune.dtheta;

    drawPlanet(mercury.calcPos()[0], mercury.calcPos()[1], mercury.radius, mercury.color);
    drawPlanet(venus.calcPos()[0], venus.calcPos()[1], venus.radius, venus.color);
    drawPlanet(earth.calcPos()[0], earth.calcPos()[1], earth.radius, earth.color);
    drawPlanet(mars.calcPos()[0], mars.calcPos()[1], mars.radius, mars.color);
    drawPlanet(jupiter.calcPos()[0], jupiter.calcPos()[1], jupiter.radius, jupiter.color);
    drawPlanet(saturn.calcPos()[0], saturn.calcPos()[1], saturn.radius, saturn.color);
    drawPlanet(uranus.calcPos()[0], uranus.calcPos()[1], uranus.radius, uranus.color);
    drawPlanet(neptune.calcPos()[0], neptune.calcPos()[1], neptune.radius, neptune.color);

    drawKuiper()

    Object.keys(Asteroids).forEach(key => {
        Asteroids[key].theta += Asteroids[key].dtheta;
    });
}

setInterval(draw, 10);
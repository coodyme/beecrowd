let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line1 = lines.shift().split(' ');

let A = parseFloat(line1[0]);
let B = parseFloat(line1[1]);
let C = parseFloat(line1[2]);

let triangle = (A * C) / 2;
let circle = 3.14159 * (C * C);
let trapezius = (A + B) * C / 2;
let square = B * B;
let rectangle = A * B;

console.log("TRIANGULO: " + triangle.toFixed(3));
console.log("CIRCULO: " + circle.toFixed(3));
console.log("TRAPEZIO: " + trapezius.toFixed(3));
console.log("QUADRADO: " + square.toFixed(3));
console.log("RETANGULO: " + rectangle.toFixed(3));


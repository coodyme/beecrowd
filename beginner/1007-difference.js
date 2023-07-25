let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
let d = parseFloat(lines.shift());

let dif = ((a * b) - (c * d));

console.log("DIFERENCA = " + dif);

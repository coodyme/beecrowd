let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

let sum = a + b;

console.log("SOMA = " + sum);

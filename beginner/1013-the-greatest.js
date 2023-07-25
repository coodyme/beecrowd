let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line = lines.shift().split(' ');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());

let maior1 = ((a + b + Math.abs(a - b)) / 2);
let maior2 = ((maior1 + c + Math.abs(maior1 - c)) / 2);

console.log(maior2 + " eh o maior");


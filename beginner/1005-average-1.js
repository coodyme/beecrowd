let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let avg = ((a * 3.5) + (b * 7.5)) / 11;

console.log("MEDIA = " + avg.toFixed(5));

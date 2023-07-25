let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let x = 60;
let y = 90;

let dist = parseInt(lines.shift());

let t = 2 * dist;

console.log(t + " minutos");

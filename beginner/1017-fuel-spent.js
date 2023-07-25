let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let t = parseInt(lines.shift());
let dv = parseInt(lines.shift());
let consumption = (t * dv) / 12.0;

console.log(consumption.toFixed(3));

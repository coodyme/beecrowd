let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let radius = parseFloat(lines.shift());
let area = (Math.pow(radius, 2)) * 3.14159;

console.log("A=" + area.toFixed(4));

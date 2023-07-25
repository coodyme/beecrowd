let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let radius = parseFloat(lines.shift());
let volume = (4 * 3.14159 * (Math.pow(radius, 3))) / 3;

console.log("VOLUME = " + volume.toFixed(3));

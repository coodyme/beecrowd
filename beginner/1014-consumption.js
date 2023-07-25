let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());

let ratio = x / y;

console.log(`${ratio.toFixed(3)} km/l`);

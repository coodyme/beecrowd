let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line1 = lines.shift().split(' ');
let line2 = lines.shift().split(' ');

let x1 = parseFloat(line1[0]);
let y1 = parseFloat(line1[1]);
let x2 = parseFloat(line2[0]);
let y2 = parseFloat(line2[1]);

let dist = Math.sqrt((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))));

console.log(dist.toFixed(4));

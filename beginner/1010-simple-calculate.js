let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line1 = lines.shift().split(' ');
let line2 = lines.shift().split(' ');

let total = ((parseFloat(line1[1]) * parseFloat(line1[2])) + (parseFloat(line2[1]) * parseFloat(line2[2])));
console.log("VALOR A PAGAR: " + "R$ " + total.toFixed(2));

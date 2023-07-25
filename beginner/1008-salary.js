let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valor = parseFloat(lines.shift());
let salario = valor * horas;

console.log("NUMBER = " + n);
console.log("SALARY = " + "U$ " + salario.toFixed(2));

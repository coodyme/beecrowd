let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let age = parseInt(lines.shift());

let years = Math.floor(age / 365);
let remainingDays = age % 365
let months = Math.floor(remainingDays / 30);
let days = remainingDays % 30;

console.log(years + " ano(s)");
console.log(months + " mes(es)");
console.log(days + " dia(s)");

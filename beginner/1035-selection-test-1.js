let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line = lines.shift().split(' ');
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());
let soma1 = c + d;
let soma2 = a + b;

if ((b > c) && (d > a) && (soma1 > soma2) && (c >= 0) && (c > 0) && (d > 0) && (a % 2 == 0)) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}

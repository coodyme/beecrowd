let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line = lines.shift().split(' ');

let cod = parseInt(line[0]);
let qnt = parseInt(line[1]);

let valor = 0;

switch (cod) {
    case 1:
        valor = 4.0;
        break;
    case 2:
        valor = 4.5;
        break;
    case 3:
        valor = 5.0;
        break;
    case 4:
        valor = 2.0;
        break;
    case 5:
        valor = 1.5;
        break;
}

let total = qnt * valor;
console.log("Total: R$ " + total.toFixed(2));

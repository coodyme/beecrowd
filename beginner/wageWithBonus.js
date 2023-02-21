var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var idadeEmDias = parseInt(lines.shift())

var anos = Math.floor(idadeEmDias / 365);
var meses = Math.floor((idadeEmDias - (anos * 365)) / 30);
var dias = (idadeEmDias - (anos * 365)) - (meses * 30);

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");

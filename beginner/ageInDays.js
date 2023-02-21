var idadeEmDias = 7887

var anos = idadeEmDias / 365;
var meses = (idadeEmDias - (anos * 365)) / 30;
var dias = (idadeEmDias - (anos * 365)) - (meses * 30);

console.log(Math.floor(anos) + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");
/*
1:  a = false;
    b = false;
    c = true;
    d = boolean;

2: O que será impresso no console será a soma de duas strings, pois o prompt recebe apenas string.


3:  Uma solução possível seria usar o Number(prompt), transformando o resultado em número.

*/

////////////////////////////////////////////////////// 1 //////////////////////////////////////////////////////////
let idadeUsuario = +prompt("Qual sua idade?");
let idadeAmig = +prompt("Qual a idade do seu/sua melhor amigo(a)?")
const result = idadeUsuario > idadeAmig;
const diferenca = idadeUsuario - idadeAmig;

console.log("Sua idade é maior do que a do seu/sua melhor amigo(a)? - " + result);
console.log("Diferença das idades: " + diferenca);

////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////
let par = +prompt("Insira um número par:");

console.log(par % 2);

// Todo número par % 2 o resultado será zero.
// Todo número impar % 2 o resultado será um.

////////////////////////////////////////////////////// 3 //////////////////////////////////////////////////////////
idadeUsuario = +prompt("Digite sua idade novamente:");
const idadeMeses = idadeUsuario * 12;
const idadeDias = idadeUsuario * 365;
const idadeHoras = idadeDias * 24;

console.log("Sua idade em meses: " + idadeMeses);
console.log("Sua idade em dias: " + idadeDias);
console.log("Sua idade em horas: " + idadeHoras);

////////////////////////////////////////////////////// 4 //////////////////////////////////////////////////////////
const num1 = +prompt("Digite um número:");
const num2 = +prompt("Digite outro número:");

console.log("O primeiro número é maior que o segundo? - " + (num1 > num2));
console.log("O primeiro número é igual ao segundo? - " + (num1 == num2));
console.log("O primeiro número é divisível pelo segundo? - " + (num1 % num2 == 0));
console.log("O segundo número é divisível pelo primeiro? - " + (num2 % num1 == 0));
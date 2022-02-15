/*
1:   (10)
    (10, 5)


2: (10, 10, 10)


3:  let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
    let pagamento = prompt("Quanto você recebe por dia?") 

*/



///////////////////////////////////////////////////////// 1 ////////////////////////////////////////////////////////////////////

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// o resultado foi undefined pois declaramos as variáveis porém não definimos seu tipo e valor.

nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");

console.log(nome, idade);

// é possível notar que no javascript as variáveis são definidas precisando apenas dar o valor específico para elas.

console.log("Olá " + nome + ", você tem" + idade + "anos");



///////////////////////////////////////////////////////// 2 ////////////////////////////////////////////////////////////////////
let pergunta1, pergunta2, pergunta3;

pergunta1 = "Você está usando uma roupa azul hoje?";
pergunta2 = "Você costuma de tomar café da manhã?";
pergunta3 = "Você gosta de viajar?";

let resp1, resp2, resp3;

resp1 = prompt(pergunta1);
resp2 = prompt(pergunta2);
resp3 = prompt(pergunta3);

console.log(pergunta1 + " - " + resp1);
console.log(pergunta2 + " - " + resp2);
console.log(pergunta3 + " - " + resp3);



///////////////////////////////////////////////////////// 3 ////////////////////////////////////////////////////////////////////
let a = 10;
let b = 25;
let c;


c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
/*
1:  a) 10, 50
    b) acredito que não aconteceria nada, pois a função apenas retorna o cálculo e não faz a impressão.


2:  a) a função vai transformar o texto do usário escrito no prompt em apenas letras minúsculas, e checar se o texto contém a palavra "cenoura".
    b) i. true
       ii. true
       iii. false
*/


////////////////////////////////////////////////////// 1 //////////////////////////////////////////////////////////
console.log("---- EXERCÍCIO 1 ----");

// A)
function infos() {
    console.log("Eu sou Luis, tenho 21 anos, moro no Rio Grande do Sul e sou estudante.");
}

// B)
function infosComParametro(n, i, e, p) {
    console.log(`Eu sou ${n}, tenho ${i} anos, moro em ${e} e sou ${p}.`);
}


infos();
infosComParametro("Luis", 21, "Glorinha-RS", "estudante de programação na Labenu");

////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////
console.log("---- EXERCÍCIO 2 ----");

// A)
function somaExercicio2(a, b) {
    return a + b;
}

console.log(somaExercicio2(5, 5));

// B)
function maiorQue(a, b) {
    return a > b;
}

console.log(maiorQue(10, 5));

// C)
function par(a) {
    return a % 2 == 0;
}

console.log(par(10));
console.log(par(9));

// D)
function mensagem(texto) {
    console.log("A frase abaixo contém " + texto.length + " letras.");
    console.log(texto.toUpperCase());
}

mensagem("Esta é uma frase de teste!");

////////////////////////////////////////////////////// 3 //////////////////////////////////////////////////////////
console.log("---- EXERCÍCIO 3 ----");

let somaExercicio3 = (a, b) => a + b;
let subtrair = (a, b) => a - b;
let multiplicacao = (a, b) => a * b;
let divisao = (a, b) => a / b;

const num1 = +prompt("Digite um número:");
const num2 = +prompt("Digite outro número:");

function resultados() {
    console.log(`Números inseridos: ${num1} e ${num2}`);
    console.log(`Soma: ${somaExercicio3(num1, num2)}`);
    console.log(`Diferença: ${subtrair(num1, num2)}`);
    console.log(`Multiplicação: ${multiplicacao(num1, num2)}`);
    console.log(`Divisão: ${divisao(num1, num2)}`);
}

resultados();
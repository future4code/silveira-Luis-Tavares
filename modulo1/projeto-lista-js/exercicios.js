// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Digite a altura do retângulo:");
  const largura = +prompt("Digite a largura do retângulo:");
  const calcArea = altura * largura;

  console.log(calcArea);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Digite o ano atual:");
  const anoNasc = +prompt("Digite o ano do seu nascimento:");
  const calcIdade = anoAtual - anoNasc;

  console.log(calcIdade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);

  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome");
  const idade = +prompt("Digita sua idade:");
  const email = prompt("Digite seu e-mail:");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua primeira cor favorita:");
  const cor2 = prompt("Digite sua segunda cor favorita:");
  const cor3 = prompt("Digite sua terceira cor favorita:");

  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calcEspetaculo = custo / valorIngresso;

  return calcEspetaculo;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const checLength = string1.length == string2.length;

  return checLength;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array.length - 1;
  
  return array[ultimoElemento];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = 0;
  const ultimo = array.length - 1;
  let vazio;

  array[vazio] = array[primeiro];
  array[primeiro] = array[ultimo] 
  array[ultimo] = array[vazio];

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const checagem = string1.toLowerCase() == string2.toLowerCase();

  return checagem;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = +prompt("Digite o ano atual:");
  const anoNasc = +prompt("Digite o ano de nascimento:");
  const anoEmissao = +prompt("Digite o ano de emissão da carteira de identidade:");
  const idade = anoAtual - anoNasc;
  const idadeCarteira = anoAtual - anoEmissao;

  const menorQue20 = idade <= 20 && idadeCarteira >= 5;
  // console.log(idade20);

  const entre20e50 = idade > 20 && idade <= 50 && idadeCarteira >= 10;
  // console.log(idade20e50);

  const maiorQue50 = idade > 50 && idadeCarteira >= 15;
  // console.log(idade50);

  console.log(menorQue20 || entre20e50 || maiorQue50);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano % 400 == 0 || ano % 4 == 0 && ano % 100 !== 0;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maisQue18 = prompt("Você tem mais de 18 anos?").toLowerCase();
  const formacao = prompt("Você possui ensino médio completo?").toLowerCase();
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase(); 

  console.log(maisQue18 == "sim" && formacao == "sim" && disponibilidade == "sim");
}
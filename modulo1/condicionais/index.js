/*
1: A) a função testa se o resto da divisão do número inserido na prompt é igual a 0.

B) números pares.

C) números ímpares.

2: A) o código serve para analisar uma freta e retornar seu valor em RS$.

B) "O preço da fruta maçã é R$2.25"

C) "O preço da fruta pêra é R$5"

3: A) a primeira linha está transformando o valor recebido no prompt (string) em número.

B) se o número for 10, vai receber a mensagem que passou no teste. Se for -10, vai receber undefined pois não tem outra condicional.

C) haverá erro no "console.log(mensagem)" pois a variável mensagem foi criada com "let" dentro do escopo da condicional if.
*/

////////////////////////////////////////////////////// 1 //////////////////////////////////////////////////////////
// function podeDirigir(idade) {
//     if(idade >= 18) 
//         console.log("Você pode dirigir.");
//      else 
//         console.log("Você não pode dirigir.");
// }

// const idadeUsuario = +prompt("Qual a sua idade?");

// podeDirigir(idadeUsuario);

// ////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////
// function turnoEstudo(turno) {
//     if(turno.toLowerCase() === "m")
//         console.log("Bom dia!")
//      else if(turno.toLowerCase() === "v")
//         console.log("Boa tarde!")
//      else if(turno.toLowerCase() == "n")
//         console.log("Boa noite!")
//      else
//         console.log("Favor digitar um turno válido.")
// }

// const turnoUsuario = prompt("Qual seu turno de estudo? (M = Matutino/V = Vespertino/N = Noturno)");

// turnoEstudo(turnoUsuario);

// ////////////////////////////////////////////////////// 3 //////////////////////////////////////////////////////////
// function turnoEstudo2(turno) {
//     switch(turno.toLowerCase()) {
//         case "m":
//             console.log("Bom dia!")
//             break;

//         case "v":
//             console.log("Boa tarde!")
//             break;

//         case "n":
//             console.log("Boa noite!")
//             break;

//         default:
//             console.log("Favor digitar um turno válido.")
//     }
// }

// turnoEstudo2(turnoUsuario); // Segui usando a mesmo valor da variável do prompt do exercício 2 (turnoUsuario).

// ////////////////////////////////////////////////////// 4 //////////////////////////////////////////////////////////
// function escolhaFilme(genero, valorIng) {
//     if(genero && valorIng) {
//         const lanche = prompt("Qual lanche você vai comprar?") // prompt da tarefa do desáfio 1
//         console.log("Bom filme!");        
//         console.log(`Aproveite o seu/a sua ${lanche}!`);
//     } else
//         console.log("Escolha outro filme :(");
// }

// const generoFilme = prompt("Qual o gênero de filme será assistido?").toLowerCase() == "fantasia";
// const valorIng = +prompt("Qual o valor do ingresso?") < 15;

// escolhaFilme(generoFilme, valorIng);

////////////////////////////////////////////////////// DESAFIOS //////////////////////////////////////////////////////////
// 2: 

const nomeUsuario = prompt("Digite seu nome completo:");
const tipoJogoUsuario = prompt("Qual o tipo de jogo? (IN = Internacional/DO = Doméstico)").toLocaleLowerCase();
const etapaJogoUsuario = prompt("Qual a etapa do jogo? (SF = Semi-Final/DT = Decisão terceiro lugar/FI = Final").toLocaleLowerCase();
const categoriaUsuario = +prompt("Qual a categoria? (1, 2, 3 ou 4)");
const qtdIngUsuario = +prompt("Qual a quantidade de ingressos?");

function sistemaDeIng(nome, tipoJogo, etapaJogo, categoria, qtdIng) {
    let valorIngJogo;
    let valorTotalJogo;
    let tipoJogoParaImpressao; // variável para armazenar string do tipo do jogo sem abreviação.
    let etapaJogoParaImpressao; // variável para armazenar string da etapa do jogo sem abreviação.
    let erro = alert("ERRO! Favor preencher as informações corretamente.");

    if(etapaJogoUsuario == "sf") {
        etapaJogoParaImpressao = "Semi-Final";
        switch(categoria) {
            case 1:
                valorIngJogo = 1320;
                break;
            case 2:
                valorIngJogo = 880;
                break;
            case 3:
                valorIngJogo = 550;
                break;
            case 4:
                valorIngJogo = 220;
                break;
            default:
                valorIngJogo = null;
                return erro;
        }
    } else if(etapaJogoUsuario == "dt") {
        etapaJogoParaImpressao = "Disputa por terceiro lugar";
        switch(categoria) {
            case 1:
                valorIngJogo = 660;
                break;
            case 2:
                valorIngJogo = 440;
                break;
            case 3:
                valorIngJogo = 330;
                break;
            case 4:
                valorIngJogo = 170;
                break;
            default:
                valorIngJogo = null;
                return erro;
        }
    } else if(etapaJogoUsuario == "fi") {
        etapaJogoParaImpressao = "Final";
        switch(categoria) {
            case 1:
                valorIngJogo = 1980;
                break;
            case 2:
                valorIngJogo = 1320;
                break;
            case 3:
                valorIngJogo = 880;
                break;
            case 4:
                valorIngJogo = 330;
                break;
            default:
                valorIngJogo = null;
                return erro;
        }
    } else
        return erro;

    if(tipoJogoUsuario == "do") {
        valorTotalJogo = valorIngJogo * qtdIng;
        tipoJogoParaImpressao = "Doméstico";
    } else if(tipoJogoUsuario == "in") {
        valorTotalJogo = (valorIngJogo * qtdIng) * 4.10;
        tipoJogoParaImpressao = "Internacional";
    } else
        return erro;

    console.log("---Dados da compra---"); // Nesta linha começa a impressão das informações;
    console.log(`Nome do cliente: ${nomeUsuario}`);
    console.log(`Tipo do jogo: ${tipoJogoParaImpressao}`);
    console.log(`Etapa do jogo: ${etapaJogoParaImpressao}`)
    console.log(`Categoria: ${categoriaUsuario}`);
    console.log(`Quantidade de ingressos: ${qtdIngUsuario} ingresso(s)`);
    console.log("---Valores---");
    if(tipoJogoUsuario) {
        console.log(`Valor do ingresso: R$ ${valorIngJogo}`);
        console.log(`Valor total: R$ ${valorTotalJogo}`);
    } else {
        console.log(`Valor do ingresso: $US ${valorIngJogo * 4.10}`);
        console.log(`Valor total: U$ ${valorTotalJogo}`);
    }
}

sistemaDeIng(nomeUsuario, tipoJogoUsuario, etapaJogoUsuario, categoriaUsuario, qtdIngUsuario);
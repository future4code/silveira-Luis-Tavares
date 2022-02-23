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
function podeDirigir(idade) {
    if(idade >= 18) 
        console.log("Você pode dirigir.");
     else 
        console.log("Você não pode dirigir.");
}

const idadeUsuario = +prompt("Qual a sua idade?");

podeDirigir(idadeUsuario);

// ////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////
function turnoEstudo(turno) {
    if(turno.toLowerCase() === "m")
        console.log("Bom dia!")
     else if(turno.toLowerCase() === "v")
        console.log("Boa tarde!")
     else if(turno.toLowerCase() == "n")
        console.log("Boa noite!")
     else
        console.log("Favor digitar um turno válido.")
}

const turnoUsuario = prompt("Qual seu turno de estudo? (M = Matutino/V = Vespertino/N = Noturno)");

turnoEstudo(turnoUsuario);

////////////////////////////////////////////////////// 3 //////////////////////////////////////////////////////////
function turnoEstudo2(turno) {
    switch(turno.toLowerCase()) {
        case "m":
            console.log("Bom dia!")
            break;

        case "v":
            console.log("Boa tarde!")
            break;

        case "n":
            console.log("Boa noite!")
            break;

        default:
            console.log("Favor digitar um turno válido.")
    }
}

turnoEstudo2(turnoUsuario); // Segui usando a mesmo valor da variável do prompt do exercício 2 (turnoUsuario).

////////////////////////////////////////////////////// 4 //////////////////////////////////////////////////////////
function escolhaFilme(genero, valorIng) {
    if(genero && valorIng) {
        const lanche = prompt("Qual lanche você vai comprar?") // prompt da tarefa do desáfio 1
        console.log("Bom filme!");        
        console.log(`Aproveite o seu/a sua ${lanche}!`);
    } else
        console.log("Escolha outro filme :(");
}

const generoFilme = prompt("Qual o gênero de filme será assistido?").toLowerCase() == "fantasia";
const valorIng = +prompt("Qual o valor do ingresso?") < 15;

escolhaFilme(generoFilme, valorIng);

////////////////////////////////////////////////////// DESAFIOS //////////////////////////////////////////////////////////
// 2: 

const nomeCliente = prompt("Digite seu nome completo:");
const tipoJogo = prompt("Digite o tipo de jogo: (IN = Internacional/DO = doméstico)").toLowerCase();
const etapaJogo = prompt("Digite a etapa do jogo: (SF = Semi-Final/DT = Decisão de terceiro lugar/FI = final)").toLocaleLowerCase();
const categoriaJogo = +prompt("Digite a categoria do jogo:");
const qtdIng = +prompt("Digite a quantidade de ingressos:");

const dadosJogo = {
    nome: nomeCliente,
    tipo: tipoJogo,
    etapa: etapaJogo,
    categoria: categoriaJogo,
    quantidade: qtdIng,
    valor: 0,
    valorTotal: 0
}

function sistemaDeIng(nome, tipo, etapa, categoria, qtdIng) {
    // let error = alert("ERRO! Favor preencher os dados corretamente."); - Não consegui fazer a mensagem de erro funcionar corretamente por enquanto, então deixei comentada.

    if(dadosJogo.etapa == "sf") {
        dadosJogo.etapa = "Semi-Final";
        switch(dadosJogo.categoria) {
            case 1:
                dadosJogo.valor = 1320;
                break;
            case 2:
                dadosJogo.valor = 880;
                break;
            case 3:
                dadosJogo.valor = 550;
                break;
            case 4:
                dadosJogo.valor = 220;
                break;
            default:
                dadosJogo.valor = null;
                // return error;
        }
    } else if(dadosJogo.etapa == "dt") {
        dadosJogo.etapa = "Disputa por terceiro lugar";
        switch(dadosJogo.categoria) {
            case 1:
                dadosJogo.valor = 660;
                break;
            case 2:
                dadosJogo.valor = 440;
                break;
            case 3:
                dadosJogo.valor = 330;
                break;
            case 4:
                dadosJogo.valor = 170;
                break;
            default:
                dadosJogo.valor = null;
                // return error;
        }
    } else if(dadosJogo.etapa == "fi") {
        dadosJogo.etapa = "Final";
        switch(dadosJogo.categoria) {
            case 1:
                dadosJogo.valor = 1980;
                break;
            case 2:
                dadosJogo.valor = 1320;
                break;
            case 3:
                dadosJogo.valor = 880;
                break;
            case 4:
                dadosJogo.valor = 330;
                break;
            default:
                dadosJogo.valor = null;
                // return error;
        }
    } else {
        dadosJogo.etapa == null;
        // return error;
    }

    if(dadosJogo.tipo == "do") {
        dadosJogo.tipo = "Nacional";
        dadosJogo.valorTotal = `Valor total: R$ ${dadosJogo.valor * dadosJogo.quantidade}`;
        dadosJogo.valor = `Valor do ingresso: R$ ${dadosJogo.valor}`;
    } else if(dadosJogo.tipo == "in") {
        dadosJogo.tipo = "Internacional";
        dadosJogo.valorTotal = `Valor total: U$${((dadosJogo.valor * 4.10) * dadosJogo.quantidade)}`;
        dadosJogo.valor = `Valor do ingresso: U$${dadosJogo.valor * 4.10}`;
    } else {
        dadosJogo.valor = null;
    }

    console.log("---Dados da Compra---");
    console.log(`Nome do cliente: ${dadosJogo.nome}`);
    console.log(`Tipo do jogo: ${dadosJogo.tipo}`);
    console.log(`Etapa do jogo: ${dadosJogo.etapa}`);
    console.log(`Categoria: ${dadosJogo.categoria}`);
    console.log(`Quantidade de ingressos: ${dadosJogo.quantidade} ingresso(s)`);
    console.log("---Valores---");
    console.log(dadosJogo.valor);
    console.log(dadosJogo.valorTotal);
}

sistemaDeIng(dadosJogo.nome, dadosJogo.tipo, dadosJogo.etapa, dadosJogo.categoria, dadosJogo.quantidade);
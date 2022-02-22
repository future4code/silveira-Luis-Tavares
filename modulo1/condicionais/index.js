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

////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////
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
    if(genero && valorIng)
        console.log("Bom filme!");
     else
        console.log("Escolha outro filme :(");
}

const generoFilme = prompt("Qual o gênero de filme será assistido?").toLowerCase() == "fantasia"
const valorIng = +prompt("Qual o valor do ingresso?") < 15;

escolhaFilme(generoFilme, valorIng);
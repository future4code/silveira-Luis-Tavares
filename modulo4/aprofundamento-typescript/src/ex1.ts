// EXERCÍCIO 1

// ------ RESPOSTA 1-A ------> o typescript impede do valor ser algo diferente da tipagem definida.

// ------ RESPOSTA 1-B ------> podemos inserir o chamado "union type", ficando const meuNumero:number | string.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores;
};

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZUL_ESCURO = "Azul escuro",
    VIOLETA = "Violeta"
};

const pessoa1: Pessoa = {
    nome: "Luis",
    idade: 22,
    corFavorita: Cores.VIOLETA
};

const pessoa2: Pessoa = {
    nome: "José",
    idade: 40,
    corFavorita: Cores.AMARELO
};

const pessoa3: Pessoa = {
    nome: "João",
    idade: 20,
    corFavorita: Cores.VERMELHO
};

console.log([pessoa1, pessoa2, pessoa3]);
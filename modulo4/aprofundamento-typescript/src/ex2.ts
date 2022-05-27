// EXERCÍCIO 2

// ------ RESPOSTA 2-A-B ------

const obterEstatisticas = (numeros: Array<number>): Estatisticas => {
    const numerosOrdenados: Array<number> = numeros.sort((a, b) => a - b);

    let soma: number = 0;

    for(let num of numeros) {
        soma += num;
    };

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };

    return estatisticas;
};

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
};

// ------ RESPOSTA 2-C ------

type AmostraDeDados = {
    numeros: Array<number>,
    obterEstatisticas: (numeros: Array<number>) => Estatisticas
};
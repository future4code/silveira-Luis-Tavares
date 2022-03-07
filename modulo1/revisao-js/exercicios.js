// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => {
        return a - b;
    });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayDePar = array.filter((item) => {
        return item % 2 == 0;
    })

    return arrayDePar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayDePar = array.filter((item) => {
        return item % 2 == 0;
    })

    const result = arrayDePar.map((item) => {
        return item * item;
    })

    return result;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;

    for(i = 0; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const result = {};
    let menor;

    if(num1 > num2) {
        result.maiorNumero = num1
        menor = num2;
    } else {
        result.maiorNumero = num2;
        menor = num1;
    }
    
    result.maiorDivisivelPorMenor = result.maiorNumero % menor == 0;
    result.diferenca = result.maiorNumero - menor;

    return result;

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const array = [];
    let contagem = 0;

    for(i = 0; i <= n-1; i++) {
        array.push(contagem);
        contagem += 2;
    }

    return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo;

    if(ladoA == ladoB && ladoA == ladoC)
        tipoTriangulo = "Equilátero";
    else if(ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA || ladoA == ladoC && ladoA != ladoB)
        tipoTriangulo = "Isósceles";
    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC)
        tipoTriangulo = "Escaleno";
    else
        tipoTriangulo = null;

    return tipoTriangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => {
        return a - b;
    });

    let result = [array[array.length-2], array[1]];
    return result;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atores = filme.atores.map((item) => {
        return " " + item;
    })

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {...pessoa, nome: "ANÔNIMO"};

   return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = [];

    for(i = 0; i < pessoas.length; i++) {
        if(pessoas[i].idade > 14 && pessoas[i].idade < 60) {
            if(pessoas[i].altura >= 1.5) {
                pessoasAutorizadas.push(pessoas[i]);
            }
        }
    } 

    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = [];

    for(i = 0; i < pessoas.length; i++) {
        if(pessoas[i].idade <= 14 || pessoas[i].idade >= 60) {
            pessoasNaoAutorizadas.push(pessoas[i]);
        } else if(pessoas[i].altura < 1.5) {
            pessoasNaoAutorizadas.push(pessoas[i]);
        }
    }
    
    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let soma = 0;
    for(conta of contas) {
        for(i = 0; i < conta.compras.length; i++) {
            soma += conta.compras[i];
        }

        conta.compras = [];

        let novoSaldo = (conta.saldoTotal - soma);
        conta.saldoTotal = novoSaldo;
        soma = 0;
    }

    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => {
        if(a.nome < b.nome)
            return -1
        else if(a.nome > b.nome)
            return 1;
        else
            return 0;
    });
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
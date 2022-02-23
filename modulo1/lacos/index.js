/*
1: o código está somando o a variável "valor" + o "i" a cada loop; o console irá imprimir o número 4.

2: A) 19, 21, 23, 25, 27, 30

B) sim, o for...of é suficiente para acessar cada índice de elemento da lista; poderia imprimir todos os números da lista, poderia somar, subtrair, multiplicar, etc.

3: seria impresso 4 linhas com asteriscos:      *
                                                **
                                                ***
                                                ****

*/

////////////////////////////////////////////////////// 1 //////////////////////////////////////////////////////////
const numPet = +prompt("Quantos bichos de estimação você possui?");

function listarPets(numeroPets) {
    let pets;
    let listaPets = [];
    if(numeroPets > 0) {
        for(let i = 0; i < numeroPets; i++) {
            pets = prompt(`Digite o nome do seu pet número ${i+1}:`);
            listaPets[i] = pets;
        }
    } else {
        console.log("Que pena! Você pode adotar um pet!");
    }

    return listaPets;
}

// let result = (listarPets(numPet));
// console.log(result);

////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////
// A)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimeArray(array) {
    for(let elementos of array) {
        console.log(elementos);
    }
}

// imprimeArray(arrayOriginal);

// B)
function dividoPor10(array) {
    for(let elementos of array) {
        console.log(elementos / 10);
    }
}

// dividoPor10(arrayOriginal);

// C)
function arrayDePares(array) {
    let newArray = [];
    for(let elementos of array) {
        if(elementos % 2 == 0) {
            newArray.push(elementos);
        }
    }

    return newArray;
}

// let result = arrayDePares(arrayOriginal);
// console.log(result);

// D)
function arrayDeStrings(array) {
    let newArray = [];
    let i = 0;
    while(i < array.length) {
        newArray[i] = `O elemento do índex ${i} é: ${array[i]}`;
        i++;
    }

    return newArray;
}

// let result = arrayDeStrings(arrayOriginal);
// console.log(result);

// E)
function maiorEmenor(array) {
    let maior = 0;
    let menor = 1000;
    for(let elementos of array) {
        if(elementos > maior) {
            maior = elementos
        }

        if(elementos < menor) {
            menor = elementos;
        }
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`);
}

maiorEmenor(arrayOriginal);
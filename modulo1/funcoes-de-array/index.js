/*
1: A) vai ser impresso cada elemento do array, o seu número índice e o array por completo

2: A) vai ser impresso um novo array com apenas o valor da propriedade nome dos elementos

3: A) vai retornar um novo array com apenas os dois apelidos diferentes de "Chijo"
*/

////////////////////////////////////////////////////// 1 //////////////////////////////////////////////////////////

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// A) 
const nomePets = pets.map((item, index, array) => {
    return item.nome;
 })

 console.log(nomePets);

//  B)
const petSalcicha = pets.filter((item) => {
    return item.raca == "Salsicha";
})

console.log(petSalcicha);

// C)
const pudols = pets.filter((item) => {
    if(item.raca == "Poodle") {
        return true;
    } else {
        return false;
    }
})

const mensagemPudols = pudols.map((item) => {
    return`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`;
})

console.log(mensagemPudols);

////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// A)
const listaNomes = produtos.map((item) => {
    return item.nome;
})

console.log(listaNomes);

// B)
const produtoComDesconto = produtos.map((item, index, array) => {
    const desconto5 = 0.05 * item.preco;
    const calcDesconto = item.preco - desconto5;
    const novoObj = {nome: item.nome, preco: (calcDesconto)}

    return novoObj;
})

console.log(produtoComDesconto);

// C)
const listaBebidas = produtos.filter((item) => {
    if(item.categoria == "Bebidas")
        return true;
    else
        return false;

    return item;
})

console.log(listaBebidas);

// D)
const listaYpe = produtos.filter((item) => {
    const produtosYpe = item.nome.includes("Ypê");

    if(produtosYpe)
        return item;
})

console.log(listaYpe);

// E)
const listaApenasYpe = listaYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`;
})

console.log(listaApenasYpe);

////////////////////////////////////////////////////// DESAFIOS //////////////////////////////////////////////////////////
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

// 1: A)

const nomesPokemons = pokemons.map((item) => {
    return item.nome;
})

const ordemAlfabetica = nomesPokemons.sort();
console.log(ordemAlfabetica);

// B)

const tiposPokemons = pokemons.map((item) => {
    return item.tipo;
})

const tiposSemRepeticao = tiposPokemons.filter((item, index) => {
    return tiposPokemons.indexOf(item) === index;
})

console.log(tiposSemRepeticao);
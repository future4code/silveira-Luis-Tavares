/*
1: A)
        Matheus Nachtergaele
        Virginia Cavendish
        {canal: "Globo", horario: "14h"}

2: A) 
        {nome: "Juca", idade: 3, raca: "SRD"}
        {nome: "Juba", idade: 3, raca: "SRD"}
        {nome: "Jubo", idade: 3, raca: "SRD"}

   B) a sintaxe dos três pontos é usada para fazer uma cópia de um objeto já criado, em um novo objeto.

3: A) false
      undefined

   B) vai ser impresso o valor da propriedade pois estamos usando a sintaxe de [], assim como poderíamos também usar objeto.propriedade, que daria o mesmo resultado.
*/

////////////////////////////////////////////////////// 1 //////////////////////////////////////////////////////////
// A)
const pessoa = {
    nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);

// B)
const novaPessoa = {...pessoa, apelidos: ["Amandita", "Dinha", "Manda"]};

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade];
   }
   
console.log(minhaFuncao(novaPessoa, "apelidos"));

////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////////
const pessoaComProfissao = {
   nome: "Luis",
   idade: 21,
   profissao: "Programador"
}

const pessoaComProfissao2 = {...pessoaComProfissao, nome: "Carlos", idade: 24, profissao: "Eletricista"};

function listarObjetos(objeto) {
   return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length];
}

console.log(listarObjetos(pessoaComProfissao));
console.log(listarObjetos(pessoaComProfissao2));

////////////////////////////////////////////////////// 3 //////////////////////////////////////////////////////////
let carrinho = [];

const fruta1 = {nome: "Banana", disponibilidade: true};
const fruta2 = {nome: "Maçã", disponibilidade: true};
const fruta3 = {nome: "Laranja", disponibilidade: true};

const addCarrinho = (fruta) => {carrinho.push(fruta)};
addCarrinho(fruta1);
addCarrinho(fruta2);
addCarrinho(fruta3);

console.log(carrinho);

////////////////////////////////////////////////////// DESAFIOS //////////////////////////////////////////////////////////
// 1: 

function dadosUsuario(nome, idade, prof) {
   let result;
   result = {nome: nome, idade: idade, profissao: prof};
   console.log(result);
   console.log(typeof result);
}

dadosUsuario("Luis", 21, "Programador");

// 2: 
const filme1 = {nome: "Django Livre", ano: 2012};
const filme2 = {nome: "Bastardos Inglórios", ano: 2009};

function filmes(filme1, filme2) {
   console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.ano < filme2.ano}`);
   console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.ano == filme2.ano}`);
}

filmes(filme1, filme2);

// 3: 
const controleEstoque = (fruta) => {return fruta.disponibilidade = !fruta.disponibilidade;}

controleEstoque(fruta1);
controleEstoque(fruta3);
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
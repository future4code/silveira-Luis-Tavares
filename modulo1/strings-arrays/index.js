/*
1:  a. [];
    b. null;
    c. 11;
    d. 3;
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    f. 9;


2: SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

////////////////////////////////////////////////// 1 //////////////////////////////////////////////////
const nome = prompt("Digite seu nome:");
const email = prompt("Digite seu e-mail:");
const cadastro = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}!`;

console.log(cadastro);

////////////////////////////////////////////////// 2 //////////////////////////////////////////////////
const comidas = ["Pizza", "Hamburguer", "Sushi", "Lasanha", "Batata Frita"];

console.log(comidas);
console.log("Estas são minhas comidas preferidas:");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

const comidaUsuario = prompt("Qual sua comida preferida?");
comidas[1] = comidaUsuario;
console.log(comidas);

////////////////////////////////////////////////// 3 //////////////////////////////////////////////////
const listaDeTarefas = [];

listaDeTarefas.push(prompt("Digite uma tarefa do seu dia-a-dia:")); 
listaDeTarefas.push(prompt("Digite outra tarefa do seu dia-a-dia:"));
listaDeTarefas.push(prompt("Digite mais uma tarefa do seu dia-a-dia:"));

console.log(listaDeTarefas);

const tarefaFinalizada = +prompt("Digite o índice de uma tarefa já realizada:");
listaDeTarefas.splice(tarefaFinalizada, 1);
console.log(listaDeTarefas);
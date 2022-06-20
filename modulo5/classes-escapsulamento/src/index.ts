// ------- EXERCÍCIO 1 -------
// 1. A) construtor serve para indicar dados que terão que ser informados obrigatoriamente ao instanciar a classe

import { Transaction } from "./classes/Transaction";
import { UserAccount } from "./classes/UserAccount";

// 1. B) RESPOSTA: 1 vez
const user1 = new UserAccount("001.002.003-04", "Luis", 21);
console.log(user1.getTransactions());

// 1. C) adicionando métodos públicos dentro da classe que deem acesso à propriedade privada (getters/setters)


// ------- EXERCÍCIO 2 -------
const transaction1 = new Transaction("PIX de pagamento", 1500, "20/06/2022");
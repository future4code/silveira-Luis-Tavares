import { Costumer } from "./classes/Costumer";
import { User } from "./classes/User";

// -------- EXERCÍCIO 1 --------
const user1 = new User("1", "luis_email@hotmail.com", "Luis", "54321");

// 1. A) não é possível pois a propriedade password é privada
// 1. B) apenas uma vez



// -------- EXERCÍCIO 2 --------
const costumer1 = new Costumer("2", "jose_email@hotmail.com", "José", "12345", "214164363456");

// 2. A) apenas uma vez também
// 2. B) foi impressa 2 vezes, uma pelo new User e outra também pelo new Costumer, que extende a função user e precisa chamar seu construtor também



// -------- EXERCÍCIO 3 --------
console.log(costumer1.getId());
console.log(costumer1.getName());
console.log(costumer1.getEmail());
console.log(costumer1.purchaseTotal);
console.log(costumer1.getCreditCard());
// console.log(costumer1.password);

// 3. A) não, pois a propriedade é privada e não possui um método get, então seria acessível apenas na classe User



// -------- EXERCÍCIO 4 --------
console.log(costumer1.introduceYourself());
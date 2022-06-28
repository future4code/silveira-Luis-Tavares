import { Commerce } from "./classes/Commerce";
import { Industry } from "./classes/Industry";
import { Client } from "./classes/interface/Client";
import { Place } from "./classes/Place";
import { Residence } from "./classes/Residence";

// -------- EXERCÍCIO 1 --------
const newClient: Client = {
    name: "Luis",
    registrationNumber: 15,
    consumedEnergy: 200,
    calculateBill: () => 2
};

console.log(newClient.name);
console.log(newClient.registrationNumber);
console.log(newClient.consumedEnergy);
console.log(newClient.calculateBill());

// 1. A) até o momento, foi possível imprimir todas as propriedades da const newClient



// -------- EXERCÍCIO 2 --------
// const place1 = new Place("9498494891");

// 2. A) o erro diz que não podemos criar uma instância de uma classe abstrata
// 2. B) acredito que se criarmos uma classe filha para a classe abstrata, poderíamos instanciar a abstrata "indiretamente"



// -------- EXERCÍCIO 3 --------
const residence1 = new Residence(5, "423432423");
const commerce1 = new Commerce(10, "554464574");
const industry1 = new Industry(15, "667585757");

console.log(residence1.getCep());
console.log(commerce1.getCep());
console.log(industry1.getCep());

// -------- EXERCÍCIO 4 --------
// 4. A) a classe possui todas propriedades e métodos de sua classe pai "Residence" e da interface "Client"



// -------- EXERCÍCIO 5 --------
// 5. A) ambas classes possuem as propriedades de client e também possuem CEP, pois a classe pai de cada uma extende a classe "Place"
// 5. B) diferença está entre o tipo de cliente, que acaba afetando o valor de sua conta de energia



// -------- EXERCÍCIO 6 --------
// 6. A) da classe industry, para poder utilizar da propriedade machinesQuantity
// 6. B) também implementa a interface client, pois necessita de suas propriedades e métodos para funcionar
// 6. C) acredito que seja por não termos uma necessidade de ter outros métodos além do get
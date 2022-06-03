import { Client } from "./types";

export const clients: Array<Client> = [
    {name: "Michael Scott", cpf: "300.453.234-98", birthDate: "15/12/1975", balance: 80000, extract: []},
    {name: "Jim Halpert", cpf: "424.675.745-90", birthDate: "10/04/1984", balance: 25000, extract: []},
    {name: "Dwight Schrute", cpf: "123-876-450-75", birthDate: "05/09/1980", balance: 10000, extract: []},
];

export const checkAge = (date: string) => {
    var date1 = new Date(date.split("/").reverse().join("/"));
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var idade = diffDays / 365;

    return idade >= 18 ? true : false;
};

export const checkCPF = (cpf:string) => {
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; 
    return cpfValido.test(cpf);
}
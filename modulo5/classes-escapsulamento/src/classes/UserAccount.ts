import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Array<Transaction> = [];

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getCpf = (): string => this.cpf;
    public getName = (): string => this.name;
    public getAge = (): number => this.age;
    public getBalance = (): number => this.balance;
    public getTransactions = (): Array<Transaction> => this.transactions;
};
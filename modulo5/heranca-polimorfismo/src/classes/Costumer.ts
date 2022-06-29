import { User } from "./User";

export class Costumer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(id: string, email: string, name: string, password: string, creditCard: string) {
        super(id, email, name, password);
        
        console.log("chamando o construtor da classe Costumer");
        this.creditCard = creditCard;
    };

    public getCreditCard = (): string => this.creditCard;
};
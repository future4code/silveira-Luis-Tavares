import { Commerce } from "./Commerce";
import { Client } from "./interface/Client";

export class CommercialClient extends Commerce implements Client {
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    private cnpj: string;

    constructor(name: string, registrationNumber: number, consumedEnergy: number, cnpj: string, floorsQuantity: number, cep: string) {
        super(floorsQuantity, cep);

        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    };

    public calculateBill = (): number => this.consumedEnergy * 0.53;
    
    public getCnpj = (): string => this.cnpj;
};
import { Industry } from "./Industry";
import { Client } from "./interface/Client";

export class IndustrialClient extends Industry implements Client {
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    private industrialRegister: number;

    constructor(name: string, registrationNumber: number, consumedEnergy: number, industrialRegister: number, machinesQuantity: number, cep: string) {
        super(machinesQuantity, cep);

        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industrialRegister = industrialRegister;
    };

    public getIndustrialRegister = (): number => this.industrialRegister;

    public calculateBill = (): number => this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
};
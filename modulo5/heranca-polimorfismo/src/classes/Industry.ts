import { Place } from "./Place";

export class Industry extends Place {
    protected machinesQuantity: number;

    constructor(machinesQuantity: number, cep: string) {
        super(cep);
        
        this.machinesQuantity = machinesQuantity;
    };

    public getMachinesQuantity = (): number => this.machinesQuantity;
};
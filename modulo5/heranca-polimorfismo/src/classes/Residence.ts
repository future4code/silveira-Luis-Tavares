import { Place } from "./Place";

export class Residence extends Place {
    protected residentsQuantity: number;

    constructor(residentsQuantity: number, cep: string) {
        super(cep);
        
        this.residentsQuantity = residentsQuantity;
    };

    public getResidentsQuantity = (): number => this.residentsQuantity;
};
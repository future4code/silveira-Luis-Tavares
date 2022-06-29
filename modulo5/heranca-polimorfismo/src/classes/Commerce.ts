import { Place } from "./Place";

export class Commerce extends Place {
    protected floorsQuantity: number;

    constructor(floorsQuantity: number, cep: string) {
        super(cep);
        
        this.floorsQuantity = floorsQuantity;
    };

    public getFloorsQuantity = (): number => this.floorsQuantity;
};
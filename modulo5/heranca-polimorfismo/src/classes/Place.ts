export abstract class Place {
    protected cep: string;

    constructor(cep: string) {
        this.cep = cep;
    };

    public getCep = (): string => this.cep;
};
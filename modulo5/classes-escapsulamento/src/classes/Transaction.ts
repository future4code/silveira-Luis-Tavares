export class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    };

    public getDescription = (): string => this.description;
    public getValue = (): number => this.value;
    public getDate = (): string => this.date;
};
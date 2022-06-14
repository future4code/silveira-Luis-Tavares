export type Extract = {
    value: number,
    date: string,
    description: string
};

export type Client = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    extract: Array<Extract>
};
// interface createUser {
//     id: string,
//     email: string,
//     name: string,
//     password: string
// };

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(id: string, email: string, name: string, password: string) {
        console.log("Chamando construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this. password = password;
    };

    public introduceYourself = (): string => {
        return `Olá, sou ${this.name}. Bom dia!`;
    };

    public getId = (): string => this.id;
    public getEmail = (): string => this.email;
    public getName = (): string => this.name;
};
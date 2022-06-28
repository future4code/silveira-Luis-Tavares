import { UserAccount } from "./UserAccount";

export class Bank {
    private accounts: Array<UserAccount>;

    constructor(accounts: Array<UserAccount>) {
        this.accounts = accounts;
    };

    public getAccounts = (): Array<UserAccount> => this.accounts;
};
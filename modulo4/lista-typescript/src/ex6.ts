type Client = {
    clientName: string,
    balance: number,
    debits: Array<number>
};

const clients: Array<Client> = [
	{ clientName: "João", balance: 1000, debits: [100, 200, 300] },
	{ clientName: "Paula", balance: 7500, debits: [200, 1040] },
	{ clientName: "Pedro", balance: 10000, debits: [5140, 6100, 100, 2000] },
	{ clientName: "Luciano", balance: 100, debits: [100, 200, 1700] },
	{ clientName: "Artur", balance: 1800, debits: [200, 300] },
	{ clientName: "Soter", balance: 1200, debits: [] }
];

const negativeDebitsClient = (array: Array<Client>): Array<Client> => {
    const filteredByNegativeDebit: Array<Client> = array.filter((client: Client) => {
        const debitsSum: number = client.debits.reduce((prev, cur) => prev + cur, 0);
        const totalBalance: number = client.balance - debitsSum;
        client.balance = totalBalance;

        return totalBalance < 0 ? true : false;
    });

    return filteredByNegativeDebit;
};

console.log(negativeDebitsClient(clients));
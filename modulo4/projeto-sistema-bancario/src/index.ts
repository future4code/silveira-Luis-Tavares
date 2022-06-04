import express, { Request, Response } from "express";
import cors from "cors";

import { Client, Extract } from "./types";
import { checkAge, checkCPF, clients, convertDate } from "./data";

export const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log("Server is running on port :3000 - http://localhost:3000"));

app.post("/client", (req: Request, res: Response) => {
    const {name, cpf, birthDate} = req.body;
    const checkClientAge: boolean = checkAge(`${birthDate}`);
    const checkCpfSyntax: boolean = checkCPF(cpf);
    const checkIfCpfExists: Client | undefined = clients.find(client => client.cpf === cpf);
    const newClient: Client = {name, cpf, birthDate, balance: 0, extract: []};

    try {
        if(!name || !cpf || !birthDate) {
            res.statusCode == 422;
            throw new Error("Cheque os campos e tente novamente");
        }

        if(!checkCpfSyntax) {
            res.statusCode == 412;
            throw new Error("Formato de CPF digitado incorretamente. (Correto: '000.000.000-00')");
        }

        if(checkIfCpfExists !== undefined) {
            res.statusCode == 412;
            throw new Error("CPF já possui cadastro no sistema");
        }

        if(!checkClientAge) {
            res.statusCode == 422;
            throw new Error("Cliente precisa ter no mínimo 18 anos ou mais");
        }

        clients.push(newClient);
        res.status(201).send(clients);

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }
});

app.get("/client/balance", (req: Request, res: Response) => {
    const {name, cpf} = req.body;
    const client: Client | undefined = clients.find(client => client.name === name);
    const checkClientName: boolean = client?.name.toLowerCase() === name.toLowerCase() ? true : false;
    const checkClientCPF: boolean = client?.cpf === cpf ? true : false;
    const checkCpfSyntax: boolean = checkCPF(cpf);
    
    try {
        if(!name || !cpf) {
            res.statusCode == 404;
            throw new Error("Cheque os campos e tente novamente");
        }
    
        if(!checkClientName) {
            res.statusCode == 404;
            throw new Error("Nome de cliente não encontrado no sistema");
        }
    
        if(!checkCpfSyntax) {
            res.statusCode == 412;
            throw new Error("Formato de CPF digitado incorretamente. (Correto: '000.000.000-00')");
        }

        if(!checkClientCPF) {
        res.statusCode == 404;
            throw new Error("CPF não encontrado no sistema");
    }

        res.status(200).send({balance: client?.balance});

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }
});

app.patch("/client/balance", (req: Request, res: Response) => {
    const {name, cpf, balance} = req.body;
    const client: Client | undefined = clients.find(client => client.name === name);
    const checkClientName: boolean = client?.name.toLowerCase() === name.toLowerCase() ? true : false;
    const checkClientCPF: boolean = client?.cpf === cpf ? true : false;
    const checkCpfSyntax: boolean = checkCPF(cpf);

    try {
        if(!name || !cpf || !balance) {
            res.statusCode == 404;
            throw new Error("Cheque os campos e tente novamente");
        }
    
        if(!checkClientName) {
            res.statusCode == 404;
            throw new Error("Nome de cliente não encontrado no sistema");
        }
    
        if(!checkCpfSyntax) {
            res.statusCode == 412;
            throw new Error("Formato de CPF digitado incorretamente. (Correto: '000.000.000-00')");
        }

        if(!checkClientCPF) {
        res.statusCode == 404;
            throw new Error("CPF não encontrado no sistema");
        }

        client !== undefined ? client.balance += balance : null;
        res.status(200).send(client);

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }

});

app.post("/client/extract", (req: Request, res: Response) => {
    const {value, date, description} = req.body;
    const actualDate: Date = new Date();
    const paymentDate: Date = new Date(convertDate(date));
    const newPayment: Extract = {value, date: date ? date : "Hoje", description}

    try {
        if(!value || value <= 0) {
            res.statusCode == 412;
            throw new Error("Insira um valor a ser pago válido");
        }

        if(date && actualDate.getTime() > paymentDate.getTime()) {
            res.statusCode == 412;
            throw new Error("Insira uma data de pagamento válida ou deixe vazio caso o pagamento seja no dia atual");
        }

        res.status(201).send(newPayment);

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }
});

app.post("/client/transfer", (req: Request, res: Response) => {
    const {clientName, clientCPF, receiverName, receiverCPF, value} = req.body;
    const client: Client | undefined = clients.find(client => client.name.toLowerCase() === clientName.toLowerCase());
    const checkClientName: boolean = client?.name === clientName;
    const checkClientCpfSyntax: boolean = checkCPF(clientCPF);
    const checkClientCPF: boolean = client?.cpf === clientCPF;
    const clientBalance: number | undefined = client !== undefined ? client.balance : undefined;

    const receiver: Client | undefined = clients.find(client => client.name.toLowerCase() === receiverName.toLowerCase());
    const checkReceiverName: boolean = receiver?.name === receiverName;
    const checkReceiverCpfSyntax: boolean = checkCPF(clientCPF);
    const checkReceiverCPF: boolean = receiver?.cpf === receiverCPF;
    const receiverBalance: number | undefined = receiver !== undefined ? receiver.balance : undefined;

    try {
        if(!clientName || !clientCPF || !receiverName || !receiverCPF || !value) {
            res.statusCode == 404;
            throw new Error("Cheque os campos e tente novamente");
        }

        if(!checkClientName || !checkReceiverName) {
            res.statusCode == 404;
            throw new Error("Nome de cliente ou destinatário não encontrado no sistema");
        }

        if(!checkClientCpfSyntax || !checkReceiverCpfSyntax) {
            res.statusCode == 412;
            throw new Error("Formato de CPF de cliente ou destinatário digitado incorretamente. (Correto: '000.000.000-00')");
        }

        if(!checkClientCPF || !checkReceiverCPF) {
            res.statusCode == 404;
            throw new Error("CPF de cliente ou destinatário não encontrado no sistema");
        }

        if(clientBalance as number < value) {
            res.statusCode == 422;
            throw new Error("Saldo atual insuficiente para transferência");
        }

        res.status(201).send({client: {...client, balance: clientBalance as number - value}, receiver: {...receiver, balance: receiverBalance as number + value}});

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }
});
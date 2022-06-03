import express, { Request, Response } from "express";
import cors from "cors";

import { Client } from "./types";
import { checkAge, checkCPF, clients } from "./data";

export const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log("Server is running on port :3000 - http://localhost:3000"));

app.post("/clients", (req: Request, res: Response) => {
    const {name, cpf, birthDate} = req.body;
    const clientAge = checkAge(`${birthDate}`);
    const clientCPF = checkCPF(cpf);
    const cpfAlreadyExists = clients.find(client => client.cpf === cpf);
    const newClient: Client = {name, cpf, birthDate, balance: 0, extract: []};

    try {
        if(!name || !cpf || !birthDate) {
            res.statusCode == 404;
            throw new Error("Cheque os campos e tente novamente");
        }

        if(!clientCPF) {
            res.statusCode == 412;
            throw new Error("Formato de CPF digitado incorretamente. (Correto: '000.000.000-00')");
        }

        if(cpfAlreadyExists !== undefined) {
            res.statusCode == 412;
            throw new Error("CPF já possui cadastro no sistema");
        }

        if(!clientAge) {
            res.statusCode == 422;
            throw new Error("Cliente precisa ter no mínimo 18 anos ou mais");
        }

        clients.push(newClient);
        res.status(200).send(clients);

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }
});
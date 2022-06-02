import express, { Request, Response } from "express";
import cors from "cors";

import { users } from "./data";
import { User, UserType } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log("Server is running on port :3000 - http://localhost:3000"));

/* ------ EXERCÍCIO 1 ------
// A) get
// B) /users

app.get("/users", (req: Request, res: Response) => res.send(users)); 

--------------------- */


/* ------ EXERCÍCIO 2 ------
// A) por params, acredito que fique mais fácil e mais prático
// B) criando um ENUM de types

app.get("/users/:type", (req: Request, res: Response) => {
    const type: string = req.params.type as string;
    const usersByType = users.filter(user => user.type.toLowerCase() === type.toLowerCase());

    try {
        if(!type) {
            res.statusCode = 404;
            throw new Error("Digite o param da requisição corretamente");
        }

        if(usersByType.length === 0) {
            res.statusCode = 404;
            throw new Error("Type de usuário não encontrado");
        }

        res.status(200).send(usersByType);

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }

});

--------------------- */


/* ------ EXERCÍCIO 3 ------
// A) query

app.get("/users/search", (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    const userFound: User | undefined = users.find(user => user.name.toLowerCase() === name.toLowerCase());

    try {
        if(!name) {
            res.statusCode = 422;
            throw new Error("Nome de usuário não inserido corretamente na query");
        }

        if(!userFound) {
            res.statusCode = 404;
            throw new Error(`Usuário de nome ${name} não encontrado`);
        }

        res.status(200).send(userFound);

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }
});

--------------------- */


/* ------ EXERCÍCIO 4 ------ */
// A) o método put serve para edição de dados
// B) sim, creio que poderíamos usar uma lógica para editar os dados do usuário cujo ID tem o mesmo valor passado no body

app.post("/users", (req: Request, res: Response) => {
    const {id, name, email, type, age} = req.body;
    const newUser: User = {id, name, email, type, age};

    try {
        if(!id || !name || !email || !type || !age) {
            res.statusCode = 422;
            throw new Error("Por favor, cheque os campos e tente novamente");
        }

        users.push(newUser);

        res.status(200).send(users);

    } catch(error: any) {
        res.status(res.statusCode).send(error.message);
    }
});
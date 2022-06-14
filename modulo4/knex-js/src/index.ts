import express, { Request, Response } from "express";
import cors from "cors";
import { connection } from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => console.log("Server is running on port :3003 - http://localhost:3003"));

// ----- EXERCÍCIO 1 -----

const searchActorByName = async (name: string) => {
        const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`);
        console.log(result[0][0]);
};

// console.log(searchActorByName("Tony Ramos"));

const gendersQuantity = async (gender: string) => {
    const result = await connection.raw(`SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`);
    console.log(result[0][0].count);
};

// console.log(gendersQuantity("female"));


// ----- EXERCÍCIO 2 -----

const updateActorSalary = async (id: string, salary: number) => {
    return await connection("Actor").update({salary}).where("id", id);
};

// console.log(updateActorSalary("001", 750000));

const deleteActorById = async (id: string) => {
    return await connection("Actor").delete().where("id", id);
};

// deleteActorById("001");

const getSalaryAvgByGender = async (gender: string) => {
    const result = await connection("Actor").avg("salary").where("gender", gender);
    console.log(result[0]);
};

// console.log(getSalaryAvgByGender("male"));


// ----- EXERCÍCIO 3 -----

app.get("/actor/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    
    try {
        const result = await connection("Actor").select("*").where("id", id);
        res.status(200).send({message: result});

    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.get("/actor", async (req: Request, res: Response) => {
    const {gender} = req.query;

    try {
        const result = await connection("Actor").count("*").where("gender", gender as string);
        res.status(200).send({message: result});

    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});


// ----- EXERCÍCIO 4 -----

app.post("/actor", async (req: Request, res: Response) => {
    const {name, gender, salary, birthDate} = req.body;

    try {
        await connection("Actor").insert({
            id: Date.now.toString(),
            name,
            salary,
            birth_date: birthDate,
            gender
        });

        res.status(201).send({message: "Ator criado com sucesso"});

    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
});

app.put("/actor", async (req: Request, res: Response) => {
    const {id, salary} = req.body;

    try {
        await connection("Actor").update({salary}).where("id", id);

        res.status(200).send({message: "Salário de ator atualizado com sucesso"});

    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        await connection("Actor").delete().where("id", id);

        res.status(200).send({message: "Ator deletado com sucesso"});

    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});
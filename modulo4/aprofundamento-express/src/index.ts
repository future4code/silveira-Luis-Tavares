import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log("Server is running on port 3000 - http://localhost:3000"));

/* ------ EXERCÍCIO 1 ------ */

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send({message: "Pong"});
});

/* ------ EXERCÍCIO 2 ------ */

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

/* ------ EXERCÍCIO 3 ------ */

const todos: Array<ToDo> = [
    {userId: 1, id: 1, title: "Lavar a louça", completed: false},
    {userId: 1, id: 2, title: "Lavar as roupas", completed: false},
    {userId: 1, id: 3, title: "Limpar a casa", completed: true},
    {userId: 2, id: 1, title: "Fazer tarefas da faculdade", completed: false},
    {userId: 2, id: 2, title: "Comprar pão", completed: true},
];

/* ------ EXERCÍCIO 4 ------ */

app.get("/todos/:userId/:status", (req: Request, res: Response) => {
    const {userId, status} = req.params;

    if(userId && status) {
        if(status == "completed") {
            res.status(200).send(todos.filter((task) => task.userId === +userId && task.completed === true));
        } else if(status === "pending") {
            res.status(200).send(todos.filter((task) => task.userId === +userId && task.completed === false));
        } else {
            res.status(404).send({message: "Por favor, digite um param entre 'completed' ou 'pending'"});
        }
    } else {
        res.status(404).send({message: "Por favor, verifique se os params foram digitados corretamente."});
    }
});

/* ------ EXERCÍCIO 5 ------ */

app.post("/todos/create/:userId", (req: Request, res: Response) => {
    const {userId} = req.params;
    const {title, completed} = req.body;

    const currentUserTasks = todos.filter((task) => task.userId === +userId);

    if(req.params) {
        if(req.body) {
            todos.push({userId: +userId, id: currentUserTasks.length+1, title, completed});
            res.status(201).send({message: "Tarefa criada com sucesso!", toDos: todos.filter((task) => task.userId === +userId)});
        } else {
            res.status(404).send({message: "Por favor, inclua o BODY requisitado para criação de tarefa."});
        }
    } else {
        res.status(404).send({message: "Por favor, informe um param para continuar"});
    }
});

/* ------ EXERCÍCIO 6 ------ */

// app.put("/todos/modify/:userId", (req: Request, res: Response) => {
//     const {userId} = req.params;
//     const {id, completed} = req.body;

//     const findUser = todos.filter((task) => task.userId === +userId);
//     const 
// });

/* ------ EXERCÍCIO 7 ------ */

app.delete("/todos/delete/:userId/:id", (req: Request, res: Response) => {
    const {userId, id} = req.params;
    const findTask = todos.findIndex((task) => task.userId === +userId && task.id === +id);
    
    if(req.params) {
        todos.splice(findTask, 1);
        res.status(200).send({message: "Task deletada com sucesso!", toDos: todos.filter((task) => task.userId === +userId)});
    } else {
        res.status(404).send({message: "Por favor, informe os params corretamente para continuar"});
    }
});

/* ------ EXERCÍCIO 8 ------ */

app.get("todos/all/:userId", (req: Request, res: Response) => res.status(200).send(todos.filter((task) => task.userId === +req.params.userId)));
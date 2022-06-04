import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Server is running on port 3000 - http://localhost:3000");
});

/* ------ EXERCÍCIO 1 ------ */

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello from express");
});

/* ------ EXERCÍCIO 2 ------ */

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
    posts: Array<Post>
};

/* ------ EXERCÍCIO 3 ------ */

const users: Array<User> = [
    {id: 1, name: "Luis Felipe", phone: "573830859", email: "luis_melotavares@hotmail.com", website: "https://www.linkedin.com/in/luisfmelot/", 
    posts: [{id: 1, title: "Post de teste Luis", body: "Esse é um post teste do Luis", userId: 1}, {id: 2, title: "Post teste novamente", body: "Mais um post teste", userId: 1}]},

    {id: 2, name: "Eric Silva", phone: "582384932", email: "eric_felipe@hotmail.com", website: "https://www.linkedin.com/in/ericsilva/", 
    posts: [{id: 1, title: "Post de teste Eric", body: "Esse é um post teste Eric", userId: 2}]},

    {id: 3, name: "Davi Araujo", phone: "984957345", email: "davi_araujo@hotmail.com", website: "https://www.linkedin.com/in/daviaraujo/", 
    posts: [{id: 1, title: "Post de teste Davi", body: "Esse é um post teste Davi", userId: 2}]},

    {id: 4, name: "Ariane Tier", phone: "876403762", email: "ariane_tier@hotmail.com", website: "https://www.linkedin.com/in/arianetier/",
    posts: [{id: 1, title: "Post de teste Ariane", body: "Esse é um post teste Ariane", userId: 2}]},
];

/* ------ EXERCÍCIO 4 ------ */

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users);
});

/* ------ EXERCÍCIO 5 ------ */

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
};

/* ------ EXERCÍCIO 6 ------ */

// EXERCÍCIO 6 - Você acha melhor criá-los dentro ou fora do array de usuários?
// RESPOSTA: acredito que faça mais sentido a requisição do usuário já retornar seus dados com o array de posts incluso.

/* ------ EXERCÍCIO 7 ------ */

app.get("/users/posts", (req: Request, res: Response) => {
    res.status(200).send(users.map((user) => user.posts));
});

/* ------ EXERCÍCIO 8 ------ */

app.get("/:userId/posts", (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    
    if(userId)
        res.status(200).send(users[userId-1].posts)
    else
        throw new Error("ID de usuário inválido");
});

/* ------ EXERCÍCIO 9 ------ */

app.delete("/:userId/posts/:postId", (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const postId = Number(req.params.postId);

    if(userId && postId)
        res.status(200).send({message: "Post deletado com sucesso"});
    else
        throw new Error("ID de usuário ou post inválido");
});

/* ------ EXERCÍCIO 10 ------ */

app.delete("/users/:userId", (req: Request, res: Response) => {
    const userId = Number(req.params.userId);

    if(userId)
        res.status(200).send({message: `Usuário ${users[userId-1].name} deletado com sucesso`});
    else
        throw new Error("Id de usuário inválido");
});
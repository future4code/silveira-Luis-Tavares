import express, { Request, Response } from "express";
import cors from "cors";
import { products } from "./data";
import { REFUSED } from "dns";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log("Server is running on port :3000 - http://localhost:3000"));

/* ------ EXERCÍCIO 1 ------ */

app.get("/test", (req: Request, res: Response) => res.status(200).send("a API está funcionando"));

/* ------ EXERCÍCIO 3 - 7 ------ */

app.post("/product/create", (req: Request, res: Response) => {
    const {name, price} = req.body;

    try {
        if(!name || !price) {
            res.statusCode === 422;
            throw new Error("Favor preencher o body de acordo com os requisitos");
        };

        if(typeof name !== "string") {
            res.statusCode === 400;
            throw new Error("Favor inserir as propriedade NAME corretamente");
        };

        if(typeof price !== "number") {
            res.statusCode === 400;
            throw new Error("Favor inserir o preço do produto corretamente");
        };

        if(price <= 0) {
            res.statusCode === 422;
            throw new Error("Preço do produto deve ser um valor acima de 0");
        };

        products.push({id: Date.now().toString(), name, price});
        res.status(200).send(products);

    } catch(error: any) {
        if(res.statusCode === 200)
            res.status(500).send("Erro inesperado, favor checar os dados e tentar novamente");
        else
            res.send(error.message);
    }
});

/* ------ EXERCÍCIO 4 ------ */

app.get("/products", (req: Request, res: Response) => {
    try {
        res.status(200).send(products);

    } catch(error: any) {
        res.status(400).send(error);
    }
});

/* ------ EXERCÍCIO 5 - 8 ------ */

app.put("/product/:name", (req: Request, res: Response) => {
    const {name} = req.params;
    const {price} = req.body;
    const productToEdit = products.find(product => product.name.toLowerCase() === name.toLowerCase());
    const newProdutsList = products.map(product => product.name.toLowerCase() === name.toLowerCase() ? {...product, price: price} : product);
    
    try {
        if(!price) {
            res.statusCode === 422;
            throw new Error("Favor inserir o novo preço do produto");
        };

        if(typeof price !== "number") {
            res.statusCode === 400;
            throw new Error("Preço inserido não é reconhecido");
        };

        if(price <= 0) {
            res.statusCode === 422;
            throw new Error("Preço do produto deve ser um valor acima de 0");
        };

        if(!productToEdit) {
            req.statusCode === 404;
            throw new Error(`Produto com nome "${name}" não encontrado`);
        };

        res.send(newProdutsList);

    } catch(error: any) {
        if(res.statusCode === 200)
            res.status(500).send("Erro inesperado, favor checar os dados e tentar novamente");
        else
            res.status(400).send(error.message);
    }
});

/* ------ EXERCÍCIO 6 - 9 ------ */

app.delete("/delete/product/:name", (req: Request, res: Response) => {
    const {name} = req.params;
    const productToDelete = products.findIndex(product => product.name.toLowerCase() === name.toLowerCase());
    
    try {
        if(productToDelete < 0) {
            res.statusCode === 404;
            throw new Error(`Produto com nome "${name}" não encontrado`);
        };

        products.splice(productToDelete, 1);
        res.send(products);

    } catch(error: any) {
        if(res.statusCode === 200)
            res.status(500).send("Erro inesperado, favor checar os dados e tentar novamente");
        else
            res.status(400).send(error.message);
    }
});
import express from "express";
import cors from "cors";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getAllUsers } from "./endpoints/getAllUsers";

const app = express();

app.use(express.json());
app.use(cors());

// --------- EXERCÍCIO 1 ---------
// 1. A)
// app.get("/users", getUserByName);

// 1. B)
app.get("/users/:type", getUserByType);

// --------- EXERCÍCIO 2 - EXERCÍCIO 3 - EXERCÍCIO 4 ---------
app.get("/users", getAllUsers);

app.listen(3003, () => console.log("Server is running"));
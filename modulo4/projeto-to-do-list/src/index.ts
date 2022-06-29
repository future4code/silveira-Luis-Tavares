import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

import { createUser } from "./endpoints/createUser";
import { getUserById } from "./endpoints/getUserById";
import { editUser } from "./endpoints/editUser";
import { createTask } from "./endpoints/createTask";
import { getTaskById } from "./endpoints/getTaskById";

const app = express();

app.use(express.json());
app.use(cors());

// 1.
app.post("/user", createUser);

// 2.
app.get("/user/:id", getUserById);

// 3.
app.put("/user/edit/:id", editUser);

// 4.
app.post("/task", createTask);

// 5.
app.get("/task/:id", getTaskById);

const server = app.listen(3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running on port ${address.port} - http://localhost:${address.port}`);
    } else {
        console.log("Failure upon starting server");
    }
});
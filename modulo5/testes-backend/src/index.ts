import express from "express";
import cors from "cors";
import { userRouter } from "./controller/routes/userRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
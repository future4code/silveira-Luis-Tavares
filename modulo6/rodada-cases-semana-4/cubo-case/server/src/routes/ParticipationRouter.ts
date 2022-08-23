import express from "express";

import { ParticipationBusiness } from "../business/ParticipationBusiness";
import { ParticipationController } from "../controller/ParticipationController";
import { ParticipationDatabase } from "../data/ParticipationDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const participationRouter = express.Router();

const participationBusiness = new ParticipationBusiness(
    new IdGenerator(),
    new ParticipationDatabase
);

const participationController = new ParticipationController(
    participationBusiness
);

participationRouter.post("/create", participationController.create);
participationRouter.get("/", participationController.read);
participationRouter.put("/update", participationController.update);
participationRouter.delete("/delete", participationController.delete);
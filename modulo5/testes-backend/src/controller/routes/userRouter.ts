import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDatabase } from "../../data/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userController = new UserController(
    new UserBusiness(
        new UserDatabase
    )
);

userRouter.post("/profile:id", userController.getUserById);
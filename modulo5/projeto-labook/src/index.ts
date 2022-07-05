import { app } from "./controller/app";

import { UserBusiness } from "./business/UserBusiness";

import { IdGenerator } from "./services/IdGenerator";
import { HashManager } from "./services/HashManager";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { UserController } from "./controller/UserController";

const userBusiness = new UserBusiness(
    new IdGenerator(),
    new HashManager(),
    new UserDatabase(),
    new Authenticator()
);

const userController = new UserController(
    userBusiness
);

// ----- SIGNUP -----
app.post("/user/signup", userController.signUp);

// ----- LOGIN -----
app.post("/user/login", userController.logIn);
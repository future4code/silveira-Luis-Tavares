import { app } from "./app";
import { UserController } from "./endpoint/UserController";

const userController = new UserController();

app.post("/user/signup", userController.createUser);

app.post("/user/login", userController.userLogin);

app.get("/user/profile", userController.getUserById);
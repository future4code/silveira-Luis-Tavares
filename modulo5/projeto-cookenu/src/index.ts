import { app } from "./app";
import { RecipeController } from "./endpoint/RecipeController";
import { UserController } from "./endpoint/UserController";

const userController = new UserController();
const recipeController = new RecipeController();

// SIGN UP
app.post("/signup", userController.createUser);

// LOGIN
app.post("/login", userController.logIn);

// USER INFOS
app.get("/user/profile", userController.getUserInfos);

// CREATE RECIPE
app.post("/recipe", recipeController.createRecipe);

// FOLLOW USER
// app.post("/user/follow", userController.followUser);

// SHOW FEED
app.get("/user/feed", );
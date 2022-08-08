import { app } from "./app";
import { ProductDatabase } from "./data/ProductDatabase";
import { productRouter } from "./routes/ProductRouter";

app.use("/product", productRouter);

new ProductDatabase().selectProductByTags(["casual", "casualeira", "metal", "metaleira"]);
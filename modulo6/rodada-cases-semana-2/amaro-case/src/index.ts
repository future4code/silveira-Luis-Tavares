import { app } from "./app";
import { productRouter } from "./routes/ProductRouter";

app.use("/product", productRouter);
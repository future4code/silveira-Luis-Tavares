import express from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../data/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const productRouter = express.Router();

const productBusiness = new ProductBusiness(
    new IdGenerator,
    new ProductDatabase
);

const productController = new ProductController(productBusiness);

productRouter.post("/create", productController.createProduct);
productRouter.get("", productController.getProducts);
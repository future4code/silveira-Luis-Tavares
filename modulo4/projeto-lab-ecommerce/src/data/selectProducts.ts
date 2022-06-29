import { Product } from "../types";
import { connection } from "./database";

export const selectProducts = async (): Promise<Array<Product>> => await connection("LabEcommerce_Products").select("*");
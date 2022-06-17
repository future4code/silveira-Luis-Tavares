import { User } from "../types";
import { connection } from "./database";

export const selectUsers = async (): Promise<Array<User>> => await connection("LabEcommerce_Users").select("*");
import { connection } from "./database";

export const insertUser = async (name: string, email: string, password: string): Promise<void> => {
    await connection("LabEcommerce_Users").insert({
        name,
        email,
        password
    });
};
import { Database } from "./Database";
import { User } from "../types";

export class UserDatabase extends Database {
    public insertUser = async (id: string, email: string, password: string): Promise<void> => {
        await this.getConnection()
        .insert({id, email, password})
        .into("User");
    };

    public selectUserByEmail = async (email: string): Promise<User> => {
        const [ result ] = await this.getConnection()
        .select("*")
        .from("User")
        .where({ email });

        return result;
    };

    public selectUserById = async (id: string): Promise<User> => {
        const [ result ] = await this.getConnection()
        .select("*")
        .from("User")
        .where({ id });

        return result;
    };
};
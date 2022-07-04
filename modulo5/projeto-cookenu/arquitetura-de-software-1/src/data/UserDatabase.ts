import { Database } from "./Database";
import { User } from "../types/user";

export class UserDatabase extends Database {
    public async insertUser(user: User): Promise<void> {
        try {
            await this.getConnection()
            .insert(user)
            .into("User_Arq");

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async selectUserByEmail(email: string): Promise<User> {
        try {
            const [user] = await this.getConnection()
            .select("*")
            .from("User_Arq")
            .where({ email });

            if(!user) {
                throw new Error("Email não encontrado");
            }

            return user;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async selectAllUsers(): Promise<User[]> {
        try {
            const users = await this.getConnection()
            .select("*")
            .from("User_Arq");

            return users;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async deleteUserById(id: string): Promise<void> {
        try {
            await this.getConnection()
            .delete()
            .from("User_Arq")
            .where({ id });

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    } 
};
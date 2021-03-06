import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";
import dotenv from "dotenv";

dotenv.config();

export class Authenticator {
    public generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
            { id: input.id }, 
            process.env.JWT_KEY as string, 
            { expiresIn: "1min" }
        );

        return token;
    };

    public getData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = { id: payload.id };

        return result;
    };
};
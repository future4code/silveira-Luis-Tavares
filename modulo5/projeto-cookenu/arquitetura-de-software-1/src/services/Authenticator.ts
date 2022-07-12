import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/authentication";

export class Authenticator {
    public generateToken(payload: AuthenticationData): string {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN }
        );

        return token;
    }

    public getTokenData(token: string): AuthenticationData {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any;

        return {
            id: payload.id,
            role: payload.role
        };
    };
};
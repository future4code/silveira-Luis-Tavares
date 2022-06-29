import * as jwt from "jsonwebtoken";

import { AuthenticationData } from "../types";

export class Authenticator {
    public generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
            input,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN }
            );

        return token;
    };

    public getTokenInfos = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;

        return { id: payload.id };
    };
};
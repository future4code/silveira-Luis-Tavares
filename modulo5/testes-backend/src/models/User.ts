import { USER_ROLES } from "../interfaces/User";

export class User {
    constructor (
        public id: string,
        public name: string,
        public email: string,
        private password: string,
        public role: USER_ROLES
    ) {};

    public static toUserModel = (user: any): User => {
        return new User(
            user.id,
            user.name,
            user.email,
            user.password,
            user.role
        );
    };
};
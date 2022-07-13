import { User } from "../../src/models/User";
import { userAdminMock, userMock } from "./UserMock";

export class UserDatabaseMock {
    public selectUserById = async (id: string): Promise<User | undefined> => {
        switch(id) {
            case "id_usermock_1":
                return userMock;
            case "id_usermock_2":
                return userAdminMock;
            default:
                return undefined;
        }
    };
};
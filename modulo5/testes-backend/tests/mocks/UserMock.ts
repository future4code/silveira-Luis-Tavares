import { USER_ROLES } from "../../src/interfaces/User";
import { User } from "../../src/models/User";

export const userMock = new User(
    "id_usermock_1",
    "user1",
    "user1@gmail.com",
    "user1password",
    USER_ROLES.NORMAL
);

export const userAdminMock = new User(
    "id_usermock_2",
    "user2",
    "user2@gmail.com",
    "user2password",
    USER_ROLES.ADMIN
);
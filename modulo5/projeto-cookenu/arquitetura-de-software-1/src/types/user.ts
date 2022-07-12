export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
};

export type userSignUp = {
    name: string,
    email: string,
    password: string,
    role: string
};

export type UserLogin = {
    email: string,
    password: string
};

export type InputDelete = {
    id: string,
    token: string
};
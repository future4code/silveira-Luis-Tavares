type User = {
    name: string,
    email: string,
    role: string
};

const users: Array<User> = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] ;

const usersEmail = (array: Array<User>): Array<string> => {
    const emailsList: Array<string> = array.filter((user: User) => {
        return user.role === "admin";
    }).map((adminUser: User) => {
        return adminUser.email;
    });

    return emailsList;
};

console.log(usersEmail(users));
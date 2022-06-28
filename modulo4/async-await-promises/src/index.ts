import axios from "axios";
import { BASE_URL } from "./baseURL";

// ----------- EXERCÍCIO 1 - EXERCÍCIO 2 -----------

// async function getAllSubscribers(): Promise<Array<any>> {
//     const res = await axios.get(`${BASE_URL}/subscribers`);
//     return res.data;
// };

// const getAllSubscribers = async (): Promise<Array<any>> => {
//     const res = await axios.get(`${BASE_URL}/subscribers`);
//     return res.data;
// };

// 1. A) get /subscribers
// 1. B) Promise<Array<any>> || Promise<any[]>
// 2. A) a diferença fica apenas na sintaxe mesmo, sendo que na nomeada devemos declarar o async antes do nome e usando arrow function após o nome

// ----------- EXERCÍCIO 3 -----------
export type User = {
    id: string,
    email: string
    name: string,
};

const getAllSubscribers = async (): Promise<Array<User>> => {
    const res = await axios.get(`${BASE_URL}/subscribers`);
    return res && res.data.map((subscriber: User) => {
        return {
            id: subscriber.id,
            email: subscriber.email,
            name: subscriber.name
        };
    });
};

getAllSubscribers();

const getSubsId = (subs: Array<User>) => subs.map(sub => sub.id);

// 3. A) não teremos, pois o retorno da função é um array de objetos com as mesmas propriedades da nova tipagem User
// 3. B) acredito que seja uma boa prática para podermos retornar os dados exatamente como na tipagem dada na função

// ----------- EXERCÍCIO 4 -----------
const createNews = async (): Promise<void> => {
    const news = {
        title: "Virou rotina…",
        content: "Em uma das mais imprevisíveis corridas do ano, algo bem rotineiro aconteceu. Foi mais um monólogo da Red Bull, Mercedes como segunda força e a Ferrari quebrando",
        date: Date.now()
    };

    await axios.put(`${BASE_URL}/news`, news);
};

// 4. A) a tipagem da função será void, pois não é necessário retornar nada

//  ----------- EXERCÍCIO 5 - EXERCÍCIO 6 -----------
const notifySubs = async (subsId: Array<string>) => {
    try {
        const req = subsId.map(id => axios.post(`${BASE_URL}/notifications`, {subscriberId: id, message: "Cheque nossa nova notícia no site!"}));
        await Promise.all(req);
        console.log("Notificações enviadas com sucesso.");

    } catch(error: any) {
        console.log("Erro ao enviar notifcação");
    }
};

// 6. A) o Promise.all consegue fazer as requisições serem feitas ao mesmo tempo
// 6. B) as notificações são enviadas mais rapidamente e o código fica mais otimizado

const main = () => {
    createNews()
    .then(getAllSubscribers)
    .then(getSubsId)
    .then(notifySubs)
    .catch(error => error.response?.data || error.message)
    .then(console.log);
};

main();
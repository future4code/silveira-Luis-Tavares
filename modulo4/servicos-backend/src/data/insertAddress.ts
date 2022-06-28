import { Address } from "../types";
import { connection } from "./database";

export const insertAddress = async (address: Address) => {
    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = address;

    await connection("Address").insert({
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    });
};
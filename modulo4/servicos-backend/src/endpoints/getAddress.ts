import axios from "axios";
import { Address } from "../types";

export const getAddress = async (cep: string, numero: number, complemento: string): Promise<Address | undefined> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        const address: Address = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            numero: numero,
            complemento: complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        };

        return address;

    } catch (error: any) {
        return undefined;
    }
};
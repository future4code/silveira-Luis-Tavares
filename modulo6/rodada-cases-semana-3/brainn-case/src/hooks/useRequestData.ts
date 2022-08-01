import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/api";

export const useRequestData = (initialState: any, endpoint: string) => {
    const [data, setData] = useState(initialState);
    
    const getData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}${endpoint}`);

            setData(response);

        } catch (error: any) {
            alert("Ocorreu um erro na requisição.");
            console.log(error);
        }
    };

    useEffect(() => {getData(), [endpoint]});

    return { data, getData };
};
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export function useRequestData(initialState, endpoint) {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        try {
            setIsLoading(true);

            const headers = {
                headers: {Authorization: localStorage.getItem("token")}
            };

            const response = await axios.get(`${BASE_URL}${endpoint}`, headers);
            setData(response.data);
            setIsLoading(false);
            
        } catch(error) {
            alert("Ocorreu um erro, tente novamente.");
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {getData()}, [endpoint]);
    return {data, getData, isLoading};
};
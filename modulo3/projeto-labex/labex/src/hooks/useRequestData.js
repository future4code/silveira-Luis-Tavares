import axios from "axios";
import { useEffect, useState } from "react";

export function useRequestData(url, headers) {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    
    const getData = async () => {
        try {
            setIsLoading(true);

            const headersAPI = {
                headers: {
                    auth: localStorage.getItem("token")
                }
            };
    
            const response = await axios.get(url, headersAPI);
            setData(response.data);
            setIsLoading(false);

        } catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [url]);

    return [data, getData, isLoading];
};
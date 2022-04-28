import axios from "axios";
import { useEffect, useState } from "react";

export function useRequestData(url, headers) {
    const [data, setData] = useState(undefined);
    
    useEffect(() => {
        const headersAPI = {
            headers: {
                auth: localStorage.getItem("token")
            }
        };

        axios.get(url, headersAPI)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, [url]);

    return data;
};
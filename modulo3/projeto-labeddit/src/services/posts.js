import axios from "axios";

import { BASE_URL } from "../constants/urls";

export const getPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        console.log(response);
    } catch(error) {
        console.log(error);
    }
};
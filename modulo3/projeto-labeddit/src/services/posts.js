import axios from "axios";

import { BASE_URL } from "../constants/urls";

const headers = {
    headers: {Authorization: localStorage.getItem("token")}
};

export const createPost = async (body, cleanFields, getPosts) => {
    try {
        await axios.post(`${BASE_URL}/posts`, body, headers);
        cleanFields();
        getPosts();

    } catch(error) {
        alert(error.response.data);
    }
};

export const handlePostVote = (direction, postId, getPosts) => {
    const body = {direction: direction};

        if(direction === 1) {
            axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers)
            .then(() => {
                getPosts();
            })
            .catch((error) => alert(error.response.data));

        } else if(direction === -1) {
            axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers)
            .then(() => {
                getPosts();
            })
            .catch((error) => alert(error.response.data));

        } else {
            axios.delete(`${BASE_URL}/posts/${postId}/votes`, headers)
            .then(() => {
                getPosts();
            })
            .catch((error) => alert(error.response.data));
        };
};
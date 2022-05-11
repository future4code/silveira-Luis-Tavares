import axios from "axios";

import { BASE_URL } from "../constants/urls";

const headers = {
    headers: {Authorization: localStorage.getItem("token")}
};

export const createComment = async (postId, body, cleanFields, getComments) => {
    try {
        await axios.post(`${BASE_URL}/posts/${postId}/comments`, body, headers);
        cleanFields();
        getComments();

    } catch(error) {
        alert(error.response.data);
    }
};

export const handleCommentVote = (direction, commentId, getComments) => {
    const body = {direction: direction};

        if(direction === 1) {
            axios.post(`${BASE_URL}/comments/${commentId}/votes`, body, headers)
            .then(() => {
                getComments();
            })
            .catch((error) => alert(error.response.data));

        } else if(direction === -1) {
            axios.post(`${BASE_URL}/comments/${commentId}/votes`, body, headers)
            .then(() => {
                getComments();
            })
            .catch((error) => alert(error.response.data));

        } else {
            axios.delete(`${BASE_URL}/comments/${commentId}/votes`, headers)
            .then(() => {
                getComments();
            })
            .catch((error) => alert(error.response.data));
        };
};
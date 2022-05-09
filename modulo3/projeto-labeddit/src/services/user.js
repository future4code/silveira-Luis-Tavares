import axios from "axios";

import { BASE_URL } from "../constants/urls";
import { goToFeedListPage } from "../router/coordinator";

export const login = async (body, cleanFields, navigate) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, body);
        localStorage.setItem("token", response.data.token);
        goToFeedListPage(navigate);

    } catch(error) {
        alert("Email ou senha inválidos, tente novamente");
        console.log(error.response.data.message);
        cleanFields();
    }
};

export const signUp = async (body, cleanFields, navigate) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/signup`, body);
        alert("Cadastro realizado com sucesso!");
        localStorage.setItem("token", response.data.token);
        goToFeedListPage(navigate);

    } catch(error) {
        alert("Erro ao cadastrar-se. Por favor, tente novamente");
        console.log(error);
        cleanFields();
    }
};
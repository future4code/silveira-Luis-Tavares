import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../constants/api";
import { CreateParticipation, DeleteParticipation, Participation, UpdateParticipation } from "../interfaces/participation";

export const createParticipation = async (body: CreateParticipation, cleanFields: VoidFunction) => {
    try {
        await axios.post(`${BASE_URL}/create`, body);
        cleanFields();

    } catch (error: any) {
        console.log(error);
        cleanFields();
    }
};

export const getParticipations = async (setParticipations: React.Dispatch<React.SetStateAction<Participation[]>>) => {
    try {
        const res = await axios.get(`${BASE_URL}`);

        setParticipations(res.data.message);

    } catch (error: any) {
        console.log(error);
    }
};

export const updateParticipation = async (body: UpdateParticipation) => {
    try {
        await axios.put(`${BASE_URL}/update`, body);

    } catch (error: any) {
        console.log(error);
    }
};

export const deleteParticipation = async (body: DeleteParticipation) => {
    try {
        await axios.delete(`${BASE_URL}/delete`, { data: body });

    } catch (error: any) {
        console.log(error);
    }
};
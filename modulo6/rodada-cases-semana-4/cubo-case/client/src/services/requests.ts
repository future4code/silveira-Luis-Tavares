import axios from "axios";
import React, { SetStateAction } from "react";
import { BASE_URL } from "../constants/api";

import { CreateParticipation, DeleteParticipation, Participation, UpdateParticipation } from "../interfaces/participation";

export const createParticipation = async (
    body: CreateParticipation,
    cleanFields: VoidFunction,
    setParticipations: React.Dispatch<SetStateAction<Participation[]>>,
) => {
    try {
        await axios.post(`${BASE_URL}/create`, body);

        cleanFields();
        getParticipations(setParticipations);

    } catch (error: any) {
        console.log(error);
        cleanFields();
    }
};

export const getParticipations = async (setParticipations: React.Dispatch<SetStateAction<Participation[]>>) => {
    try {
        const res = await axios.get(`${BASE_URL}`);

        setParticipations(res.data.message);

    } catch (error: any) {
        console.log(error);
    }
};

export const updateParticipation = async (body: UpdateParticipation, setParticipations: React.Dispatch<SetStateAction<Participation[]>>) => {
    try {
        await axios.put(`${BASE_URL}/update`, body);
        
        getParticipations(setParticipations);

    } catch (error: any) {
        console.log(error);
    }
};

export const deleteParticipation = async (body: DeleteParticipation, setParticipations: React.Dispatch<SetStateAction<Participation[]>>) => {
    try {
        await axios.delete(`${BASE_URL}/delete`, { data: body });
        
        getParticipations(setParticipations);

    } catch (error: any) {
        console.log(error);
    }
};
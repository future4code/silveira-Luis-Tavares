import axios from "axios";
import { BASE_URL } from "../constants/api.js";
import { Concourse } from "../interfaces/Concourse.js";

export const getLotterys = async (setLotterys: any): Promise<void> => {
    try {
        const res = await axios.get(`${BASE_URL}/loterias`);

        setLotterys(res.data);

    } catch (error: any) {
        console.log(error.message);
    }
};

export const getConcourses = async (setConcourses: any): Promise<void> => {
    try {
        const res = await axios.get(`${BASE_URL}/loterias-concursos`);

        setConcourses(res.data);

    } catch (error: any) {
        console.log(error.message);
    }
};

export const getConcourseById = async (concourses: Concourse[], currentLotteryId: any, setCurrentConcourse: any) => {
    try {
        const id = concourses && concourses.find((concourse: Concourse) => concourse.loteriaId === currentLotteryId)?.concursoId;

        if (id) {
            const res = await axios.get(`${BASE_URL}/concursos/${id}`);

            setCurrentConcourse(res.data);
        }

    } catch (error: any) {
        console.log(error.message);
    }
};
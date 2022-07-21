import { NavigateFunction } from "react-router-dom";

export const goToMovieDetailsPage = (navigate: NavigateFunction, id: number): void => {
    navigate(`/details/${id}`);
};

export const goBack = (navigate: NavigateFunction): void => {
    navigate(-1);
};
import { NavigateFunction } from "react-router-dom";

export const goToMovieDetailsPage = (navigate: NavigateFunction, id: number): void => {
    navigate(`/details/${id}`);
    window.scrollTo(0, 0);
};

export const goBack = (navigate: NavigateFunction): void => {
    navigate(-1);
};
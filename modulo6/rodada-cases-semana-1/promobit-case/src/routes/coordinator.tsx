export const goToMovieDetailsPage = (navigate: any, id: number): void => {
    navigate(`/details/${id}`);
};

export const goBack = (navigate: any): void => {
    navigate(-1);
};
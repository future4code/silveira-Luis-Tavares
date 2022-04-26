export const goToTripsList = (navigate) => {
    navigate(`/trips/list`);
};

export const goToApplicationForm = (navigate) => {
    navigate(`/trips/application`);
};

export const goToLoginPage = (navigate) => {
    navigate(`/login`);
};

export const goToAdminHomePage = (navigate) => {
    navigate(`/admin/trips/list`);
};

export const goToTripCreation = (navigate) => {
    navigate(`/admin/trips/create`);
};

export const goToTripDetails = (navigate, id) => {
    navigate(`/admin/trips/${id}`);
};

export const goBack = (navigate) => {
    navigate(-1);
};
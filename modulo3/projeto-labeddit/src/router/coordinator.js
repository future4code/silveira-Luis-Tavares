export const goToLoginPage = (navigate) => {
    navigate(`/`);
};

export const goToSignupPage = (navigate) => {
    navigate(`/signup`);
};

export const goToFeedListPage = (navigate) => {
    navigate(`/feed`);
};

export const goToPostPage = (navigate, id) => {
    navigate(`/feed/post/${id}`);
};
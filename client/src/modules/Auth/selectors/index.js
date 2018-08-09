const getToken = state => state.auth.token;
const getUser = state => state.auth.user;
const getError = state => state.auth.error;

const userSelectors = {
    getToken,
    getUser,
    getError
};

export default userSelectors;
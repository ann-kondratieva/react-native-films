const getToken = state => state.auth.token;
const getUser = state => state.auth.user;
const getError = state => state.auth.error;
const getUsername = state => state.auth.user.username;

const userSelectors = {
    getToken,
    getUser,
    getError,
    getUsername
};

export default userSelectors;
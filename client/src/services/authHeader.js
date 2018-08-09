const authHeader = function (token) {
    if (token) {
        return 'jwt ' + token;
    } else {
        return null;
    }
};

export default authHeader;
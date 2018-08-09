const getUser = (req, res) => {
    const { user } = req;
    user.password = null;
    res.json(user);
};

export default getUser;
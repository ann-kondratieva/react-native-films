const getUser = async (req, res) => {
    const { user } = req;
    let resUser = JSON.parse(JSON.stringify(user));
    resUser.password = null;
    res.json(resUser);
};

export default getUser;
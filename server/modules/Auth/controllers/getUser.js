import User from '../model/user';

const getUser = async (req, res) => {
    const { user } = req;
    let resUser = user;
    resUser.password = null;
    res.json({ user: resUser });
};

export default getUser;
import jwt from 'jsonwebtoken';

import { SECRET } from '../../../modules/Auth/config/settings';

const login = async (req, res) => {
    const { user } = req;
    try {
        var token = jwt.sign(user.toJSON(), SECRET);
        user.password = null;
        return res.json({ token, user });
    } catch (error) {
        throw error;
    }
};

export default login;
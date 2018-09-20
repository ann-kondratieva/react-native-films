import jwt from 'jsonwebtoken';

import { SECRET } from '../../../modules/Auth/config/settings';
import User from '../model/user';

const register = async (req, res) => {
    const { body: { username, email, password } } = req;
    try {
        let user = await User.findOne({ $or: [{ email : email.toLowerCase() }, { username }] });
        if (user) {
            res.status(401); 
            return res.send({ message: 'User already exists.' });
        }
        let newUser = new User({
            username,
            email: email.toLowerCase(),
            password
        });
        await newUser.save();
        let token = jwt.sign(newUser.toJSON(), SECRET);
        newUser.password = null;
        return res.json({ token, newUser });
    } catch (error) {
        throw error;
    }
};

export default register;
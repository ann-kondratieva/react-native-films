import User from '../model/user';

const updateUser = async (req, res) => {
    try {
        const { body: { user } } = req;
        await User.findByIdAndUpdate(user._id, { $set: { username: user.username, avatar: user.avatar } });
        return res.json({ user });
    } catch (error) {
        if (error.codeName == 'DuplicateKey') {
            return res.status(422).send({ message: 'User already exists' });
        }
        throw error;
    }
};

export default updateUser;
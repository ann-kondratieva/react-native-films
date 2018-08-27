import Joi from 'react-native-joi';

export const usernameSchema = Joi.object().keys({
    username: Joi.string().required()
});

export const USERNAME_FORM = 'USERNAME_FORM';


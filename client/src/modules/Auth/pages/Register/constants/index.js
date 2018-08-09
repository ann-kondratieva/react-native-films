import Joi from 'react-native-joi';

export const registerSchema = Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
});

export const REGISTER_FORM = 'REGISTER_FORM';


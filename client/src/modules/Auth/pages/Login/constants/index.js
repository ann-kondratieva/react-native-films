import Joi from 'react-native-joi';

export const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
});

export const LOGIN_FORM = 'LOGIN_FORM';


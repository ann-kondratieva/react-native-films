import Joi from 'joi';

import { loginSchema, registerSchema } from '../constants';

const handleResult = (req, res, next, result) => {
    if (result.error !== null) {
        return res.status(401).send({ message: 'Sorry, data doesn\'t match requested params' });
    } else next();
};

export const validateLogin = (req, res, next) => {
    const { body: { email, password } } = req;
    const result = Joi.validate({ email, password }, loginSchema);
    handleResult(req, res, next, result);
};

export const validateRegister = (req, res, next) => {
    const { body: { username, email, password } } = req;
    const result = Joi.validate({ username, email, password }, registerSchema);
    handleResult(req, res, next, result);
};



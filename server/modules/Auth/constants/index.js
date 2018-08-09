import Joi from 'joi';

export const loginSchema = Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/)
}).with('email', 'password');

export const registerSchema = Joi.object().keys({
    username: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/)
}).with('username', ['email', 'password']);


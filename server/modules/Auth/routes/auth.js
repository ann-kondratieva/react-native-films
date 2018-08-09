import express from 'express';

import { validateRegister } from '../middlewares/validate';
import { validateLogin } from '../middlewares/validate';
import register from '../controllers/register';
import login from '../controllers/login';
import { localAuthenticate } from '../middlewares/authenticate';
import user from './user';

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, localAuthenticate, login);

router.use('/user', user);

export default router;
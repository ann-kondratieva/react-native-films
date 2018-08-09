import express from 'express';

import { jwtAuthenticate } from '../middlewares/authenticate';
import getUser from '../controllers/getUser';

const router = express.Router();

router.get('/', jwtAuthenticate, getUser);

export default router; 
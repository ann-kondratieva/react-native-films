import express from 'express';

import { jwtAuthenticate } from '../middlewares/authenticate';
import getUser from '../controllers/getUser';
import updateUser from '../controllers/updateUser';

const router = express.Router();

router.get('/', jwtAuthenticate, getUser);
router.put('/:id', jwtAuthenticate, updateUser);

export default router; 
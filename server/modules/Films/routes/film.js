import express from 'express';

import { jwtAuthenticate } from '../../Auth/middlewares/authenticate';
import getFilm from '../controllers/getFilm';
import updateFilm from '../controllers/updateFilm';
import updateUserMarks from '../middlewares/updateUserMarks';

const router = express.Router();

router.get('/', jwtAuthenticate, getFilm);
router.put('/rating', jwtAuthenticate, updateUserMarks, updateFilm);
router.put('/', jwtAuthenticate, updateFilm);

export default router;
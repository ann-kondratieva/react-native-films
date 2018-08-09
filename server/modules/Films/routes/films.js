import express from 'express';

import { jwtAuthenticate } from '../../Auth/middlewares/authenticate';
import getFilms from '../controllers/getFilms';
import getFilm from '../controllers/getFilm';
import updateUserMarks from '../middlewares/updateUserMarks';
import updateFilm from '../controllers/updateFilm';

const router = express.Router();

router.get('/', jwtAuthenticate, getFilms);
router.get('/:id', jwtAuthenticate, getFilm);
router.put('/:id/rating', jwtAuthenticate, updateUserMarks, updateFilm);
router.put('/:id', jwtAuthenticate, updateFilm);

export default router;
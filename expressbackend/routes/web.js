import express from 'express';
import FilmyController from '../controllers/filmsController.js';
const router = express.Router();


router.get('/filmy', FilmyController.getAllDoc)

export default router
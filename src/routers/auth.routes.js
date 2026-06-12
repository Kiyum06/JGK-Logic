import { Router } from 'express';
import { getRegister, postLogin, getLogin, postRegister } from '../controllers/auth.controller.js';

const router = Router();

router.get('/register', getRegister);
router.post('/register', postRegister);
router.get('/login', getLogin);
router.post('/login', postLogin);

export default router;
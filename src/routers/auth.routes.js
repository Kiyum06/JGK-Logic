import { Router } from 'express';
import { getRegister, postLogin, getLogin, postRegister, postLogout } from '../controllers/auth.controller.js';

const router = Router();

router.get('/register', getRegister);
router.post('/register', postRegister);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.post('/logout', postLogout);

export default router;
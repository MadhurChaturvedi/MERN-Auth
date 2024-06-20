import express from 'express';
import { authUser } from '../Controllers/userController.js'

const router = express.Router();

router.post('/auth', authUser)

export default router;

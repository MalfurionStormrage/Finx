import { signin, signup, islogin } from '../controllers/auth';
import { Router } from 'express';
const auth = Router();

auth.post('/signup', signup);
auth.post('/signin', signin);
auth.get('/islogin', islogin);

export default auth;
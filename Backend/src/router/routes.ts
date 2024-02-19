import express from 'express';
import { register } from '../controller/register';
import { login } from '../controller/login';
import { authenticator } from '../middleware/auth';



const router = express.Router();


router
.post('/login',login)
.post('/register',register)



export {router}
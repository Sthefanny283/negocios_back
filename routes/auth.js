import { Router } from 'express';
import { AuthController } from '../controllers/index.js';

const routerAuth = Router();
const authController = new AuthController();

routerAuth.post('/login', [], authController.login);
routerAuth.post('/register', [], authController.register);
routerAuth.get('/profile/:idClient', [], authController.getProfile);
routerAuth.put('/updateprofile/:idClient', [], authController.updateProfile);

export default routerAuth;

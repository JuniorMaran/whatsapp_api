import express from 'express';
import SendMessageController from '../controllers/SendMessageController.js';
import CreateUserController from '../controllers/CreateUserController.js';
const routes = express.Router();

routes.post('/send-message', SendMessageController);
routes.post('/create-user', CreateUserController);
export default routes;

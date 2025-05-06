import express from 'express';
import usersController from '../controllers/usersController.js';

const router = express.Router();

// Defina as rotas diretamente no router
router.get('/', usersController.getUsers.bind(usersController));
router.post('/', usersController.createUser.bind(usersController));
router.put('/:id', usersController.updateUser.bind(usersController));
router.delete('/:id', usersController.deleteUser.bind(usersController));

export default router;
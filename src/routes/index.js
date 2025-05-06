import express from 'express';
import paymentsRoutes from './paymentsRoutes.js';
import usersRoutes from './usersRoutes.js';

const router = express.Router();

// Use distinct prefixes for each route group
router.use('/api/payments', paymentsRoutes);
router.use('/api/users', usersRoutes);

export default router;
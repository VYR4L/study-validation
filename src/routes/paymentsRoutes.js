import { Router } from 'express';
import PaymentsController from '../controllers/paymentsController.js';

const router = Router();
const paymentsController = new PaymentsController();

router.get('/', paymentsController.getPayments.bind(paymentsController));
router.post('/', paymentsController.createPayment.bind(paymentsController));
router.put('/:id', paymentsController.updatePayment.bind(paymentsController));
router.delete('/:id', paymentsController.deletePayment.bind(paymentsController));

export default router;
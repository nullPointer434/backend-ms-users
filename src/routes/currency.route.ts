import { Router } from 'express';
import { getCurrencies } from './../controllers/currency.controller';

const router = Router();

router.get('/currencies', getCurrencies);

export default router;
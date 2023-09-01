import express from 'express';
import { createAccount, getAllAccount, resolveAccount } from '../controller/bankController';
const router = express.Router();

router.post('/', createAccount);
router.get('/account/:accountNumber', resolveAccount);
router.get('/accounts', getAllAccount)

export default router;

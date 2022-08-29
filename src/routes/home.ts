import { Router } from 'express';
import { firstController } from '../controllers/home';
const router: Router = Router();

router.get('/', firstController.index);

export default router;

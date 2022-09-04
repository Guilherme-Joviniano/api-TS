import { Router } from 'express';
import { controller } from '../controllers/user';
const router: Router = Router();

router.post('/', controller.store);
// router.put('/',  controller.update);
// router.delete('/',  controller.delete);

export default router;

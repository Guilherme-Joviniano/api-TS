import { Router } from 'express';
import controller from '../controllers/post';
import upload from '../middlewares/upload'

const router: Router = Router();

router.post('/', upload.single('video'), controller.store);

export default router;
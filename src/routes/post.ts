import { Router } from 'express';
import controller from '../controllers/post';
import upload from '../middlewares/upload'

const router: Router = Router();

router.post('/upload', upload.single('postVideo'), controller.store);

export default router;
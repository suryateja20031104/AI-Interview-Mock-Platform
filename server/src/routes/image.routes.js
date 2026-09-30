import { Router } from 'express';
import { listImages, uploadImage } from '../controllers/image.controller.js';
import authenticate from '../middleware/auth.middleware.js';
import { uploadImage as multerUploadImage } from '../middleware/upload.middleware.js';

const router = Router();

router.use(authenticate);

router.post('/upload', multerUploadImage, uploadImage);
router.get('/', listImages);

export default router;
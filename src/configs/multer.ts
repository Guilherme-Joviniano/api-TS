import multer from 'multer';
import { extname, resolve } from 'path';

const randomToken = () => Math.floor(Math.random() * 10000 + 10000);

export default {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads', 'video', 'posts'));
        },
        filename (req, file, cb) {
            cb(null, `${Date.now()}_${randomToken()}${extname(file.originalname)}`);
        },
    }),
};

import multer from 'multer';
import config from '../configs/multer'

const upload = multer(config)

export default upload
import multer from 'multer';
import storage from '../configs/multer'

const upload = multer({ storage })

export default upload
import { NextFunction, Response } from 'express';
import UnsupportedStoreData from '../UnsupportedStoreData';
import { CustomErrors } from '../CustomErrors';
import { HttpCode } from '../../types/ExceptionTypes';

class CustomizedExceptionHandler {
    handleError(err: CustomErrors, res: Response, next: NextFunction) {
        if (err.type === 'UnsupportedStoreData' ) this.handleUnsupportedStoreData(err, res, next)
    }

    private handleUnsupportedStoreData(err: Error | UnsupportedStoreData, res: Response, next: NextFunction): Response {
        return res.status(HttpCode.BAD_REQUEST).json({
            error: err.message,
            code: HttpCode.BAD_REQUEST
        })
    }
}

const customizedExceptionHandler = new CustomizedExceptionHandler();
export default customizedExceptionHandler
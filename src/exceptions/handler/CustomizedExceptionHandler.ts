import { NextFunction, Request, Response } from 'express';
import UnsupportedStoreData from '../UnsupportedStoreData';
import { CustomErrors } from '../../types/CustomErrors';
import { HttpCode } from '../../types/HtppCodes';
import DuplicateUser from '../DuplicateUser';

export default class CustomizedExceptionHandler {
    public static handleError(err: CustomErrors, res: Response, next: NextFunction) {
        return res.status(err.httpCode).json({
            name: err.name,
            description: err.description,
            code: err.httpCode,
            isOperational: err.isOperational,
        })
    }
}
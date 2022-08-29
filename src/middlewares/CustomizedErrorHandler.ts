import { NextFunction, Request, Response, Router  } from "express";
import { CustomErrors } from "../exceptions/CustomErrors";
import customizedErrorHandler from '../exceptions/handler/CustomizedExceptionHandler';

const handleError = (err: CustomErrors, req: Request, res: Response, next: NextFunction) => {
    customizedErrorHandler.handleError(err, res, next);
}

export default handleError;
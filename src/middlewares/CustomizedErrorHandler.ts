import { NextFunction, Request, Response, Router  } from "express";
import { CustomErrors } from "../types/CustomErrors";
import CustomizedErrorHandler from '../exceptions/handler/CustomizedExceptionHandler';

const handleErrors = (err: CustomErrors, req: Request, res: Response, next: NextFunction) => {
    CustomizedErrorHandler.handleError(err, res, next);
}

export default handleErrors;
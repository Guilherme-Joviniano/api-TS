import { NextFunction, Request, Response, Router  } from "express";
import customizedErrorHandler from '../Exceptions/handler/CustomizedExceptionHandler';

const router: Router = Router();

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    customizedErrorHandler.handleError(err, res);
})
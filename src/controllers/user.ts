import { NextFunction, Request, Response } from "express";
import service from "../services/user";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { UserModel } from '../models/user';
import validateUser from "../validations/UserValidate";
import { HttpCode } from "../types/HtppCodes";

class Controller {
    public async store(req: TypedResquestBody<UserModel>, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined | NextFunction> {
        try {

            validateUser(req, res);
            
            const user = await service.store(req, res, next);

            return res.status(HttpCode.OK).json(user);

        } catch (err) {
            next(err);
        }
    }
    // public async update (req: TypedResquestBody<{}, res: >)
}

export const controller = new Controller();

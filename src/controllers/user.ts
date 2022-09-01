import { NextFunction, Request, Response } from "express";
import { Service } from "../services/user";
import { TypedResquestBody } from "../types/TypedRequestBody";
import UnsupportedStoreData from "../exceptions/UnsupportedStoreData";
import { User, UserType } from '../models/user';

class Controller {
    //Create a new User!
    public store(req: TypedResquestBody<UserType>, res: Response, next: NextFunction) {
        try {
            const { email, firstName, lastName, password } = req.body

            if (!email || !firstName || !lastName || !password) throw UnsupportedStoreData.ERROR


            return Service.store(req, res, next);
        } catch (err) {
            next(err);
        }
    }
    // Create the delete and the update controller and respectives services!
}

export const controller = new Controller();

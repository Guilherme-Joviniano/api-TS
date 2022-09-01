import { NextFunction, Request, Response } from "express";
import { Service } from "../services/user";
import { TypedResquestBody } from "../types/TypedRequestBody";
import UnsupportedStoreData from "../exceptions/UnsupportedStoreData";
import { User, UserModel } from '../models/user';

class Controller {
    //Create a new User!
    public async store (req: TypedResquestBody<UserModel>, res: Response, next: NextFunction) {
        try {
            const { email, firstName, lastName, password } = req.body

            if (!email || !firstName || !lastName || !password) throw UnsupportedStoreData.instance

            const user = await Service.store(req, res, next);
            
            const response = user?.toJSON();

            return res.status(200).json(response);

        } catch (err) {
            next(err);
        }
    }
    // Create the delete and the update controller and respectives services!
}

export const controller = new Controller();

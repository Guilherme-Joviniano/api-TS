import { NextFunction, Request, Response } from "express";
import { Service } from "../services/user";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { UserModel } from "../models/UserModel";
import UnsupportedStoreData from "../exceptions/UnsupportedStoreData";

class Controller {
    //Create a new User!
    public store(req: TypedResquestBody<UserModel>, res: Response, next: NextFunction) {
        try {
            const { email, name, lastname, password } = req.body
            console.log(req.body)
            if (!email || !name || !lastname || !password) throw UnsupportedStoreData.ERROR
            // check the fields individualy with the UserModel methods
            return Service.store(req, res);
        } catch (err) {
            next(err);
        }
    }
}

export const controller = new Controller();

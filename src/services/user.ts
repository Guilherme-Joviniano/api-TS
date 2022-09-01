import { NextFunction, Request, Response } from "express";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { User, UserModel } from "../models/user";
import UnsupportedStoreData from "../exceptions/UnsupportedStoreData";

export class Service {
    public static async store(req: TypedResquestBody<UserModel>, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            console.log(req.body)
            
            // user find by email
            
            if (User.findOne({ email })) return res.json({ message: 'user already exists' })

            if (UserModel.checkEmail(email)) throw UnsupportedStoreData.instance;
            
            const user = await User.create(req.body);
            
            return user
        
        } catch (err) {
            next(err);
        }
    }
}
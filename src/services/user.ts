import { NextFunction, Request, Response } from "express";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { User, UserModel } from "../models/user";
import UnsupportedStoreData from "../exceptions/UnsupportedStoreData";
import validator from "validator";

export class Service {
    public static async store(req: TypedResquestBody<UserModel>, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            console.log(req.body)

            if (Service.checkEmail(email)) throw UnsupportedStoreData.instance
            // user find by email
            if (Service.checkDoubleUser(email)) return res.json({ message: 'user already exists' })

            const user = await User.create(req.body);

            return user
        } catch (err) {
            next(err);
        }
    }


    private static checkDoubleUser = (email: string): boolean => {
        if (User.findOne({ email })) return true;
        return false;
    }

    private static checkEmail = (email: string): boolean => validator.isEmail(email)
}
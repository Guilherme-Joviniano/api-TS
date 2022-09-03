import { NextFunction, Request, Response } from "express";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { User, UserModel } from "../models/user";
import { HttpCode } from "../types/HtppCodes";

class Service {
    public async store(req: TypedResquestBody<UserModel>, res: Response, next: NextFunction) {
        try {

            const { email } = req.body;
            const existingUser = await User.findOne({ email: email })
                        
            if (existingUser) {
                return res.status(HttpCode.BAD_REQUEST).json({
                    message: ['The User Already exists! ']
                })
            }

            const user = await User.create(req.body);
            return user
        } catch (err) {
            next(err);
        }
    }
}

const service = new Service();

export default service
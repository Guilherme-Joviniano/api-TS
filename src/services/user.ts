import { NextFunction, Request, Response } from "express";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { User, UserType } from "../models/user";
import { nextTick } from "process";

export class Service {
    public static async store(req: TypedResquestBody<UserType>, res: Response, next: NextFunction) {
        try {
            const user = await User.create(req.body);
            return user;
        } catch (err) {
            next(err);
        }
    }
}
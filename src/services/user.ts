import { Request, Response } from "express";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { UserModel } from "../types/User";

export class Service {
    public static store(req: TypedResquestBody<UserModel>, res: Response) {
        // make the bussines logic to create in the DB
        return res.json(req.body)
    }
}
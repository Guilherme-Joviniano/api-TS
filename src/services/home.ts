import { Request, Response } from "express";

export class Service {
    public static index(req: Request, res: Response) {
        return res.json({
            message: "Sucefful Connection With The Api",
            data: Date.now()
        })
    }
}
import { Request, Response } from "express";
import { Service } from "../services/home";

class FirstController {
    public index(req: Request, res: Response) {
        
        return Service.index(req, res); 
    }
}

export const firstController = new FirstController();

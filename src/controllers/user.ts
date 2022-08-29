import { Request, Response } from "express";
import { Service } from "../services/user";
import { TypedResquestBody } from "../types/TypedRequestBody";
import { UserModel } from "../types/User";
import UnsupportedStoreData from "../Exceptions/UnsupportedStoreData";

class Controller {
    //Create a new User!
    public store(req: TypedResquestBody<UserModel>, res: Response) {   
        try {

        const { email, lastname, name, password } = req.body;
    
        if (!email || !lastname || !name || !password) throw UnsupportedStoreData.ERROR;
        
        return Service.store(req, res); 
       
        } catch (e) {
            const result = (e as UnsupportedStoreData).message;
            console.log(result);
            return res.status(202).json({ error: [result] });
        }}
}

export const controller = new Controller();

import { Request, Response } from 'express';


class Post {
    store (req: Request, res: Response) {
        console.log(req)
        return res.json({
            message: ['ok']
        })
    }
}

const controller = new Post();
export default controller;
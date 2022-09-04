import { Request, ParamsDictionary, Response } from 'express-serve-static-core';
import { HttpCode } from '../types/HtppCodes';

class Post {
    store(req: Request, res: Response) {
      
      if (!req.file) {
        return res.status(HttpCode.BAD_REQUEST).json({
          message: ['Failed Video Uploaded!']
        })
      }
        
      return res.status(HttpCode.OK).json({
        message: ['Success Video Uploades!']
      })
      
    }
}


export default new Post;
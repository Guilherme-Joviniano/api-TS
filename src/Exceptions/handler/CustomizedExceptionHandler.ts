import { Response } from 'express';


class CustomizedExceptionHandler {

    handleError(err: Error, res: Response) : void {
        
    }

}



const customizedExceptionHandler = new CustomizedExceptionHandler();
export default customizedExceptionHandler
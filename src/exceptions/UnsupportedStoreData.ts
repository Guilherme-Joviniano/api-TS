import { CustomError } from 'ts-custom-error'
import { HttpCode } from '../types/HtppCodes';
import AppErrorArgs from '../types/AppError';

export default class UnsupportedStoreData extends CustomError implements AppErrorArgs {

    private static UNSUPPORTED_STORE_DATA: string = "Please set correctly data to the create a user!"
    private static CODE: number = 202
    
    public httpCode: HttpCode;
    public description: string;
    public isOperational?: boolean | undefined;

    private constructor(public code: number, public message: string, public type: string = 'UnsupportedStoreData') { 
        super(message)
        this.httpCode = code
        this.description = message
        this.isOperational = true
    }
    
    static instance: UnsupportedStoreData = new UnsupportedStoreData(this.CODE, this.UNSUPPORTED_STORE_DATA);
}
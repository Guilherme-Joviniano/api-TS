import { CustomError } from 'ts-custom-error'
import { HttpCode } from '../types/HtppCodes'
import AppErrorArgs from '../types/AppError'

export default class DuplicateUser extends CustomError implements AppErrorArgs {

    private static DUPLICATE_USER : string = "The user already exist"
    private static CODE: number = HttpCode.BAD_REQUEST
    
    public httpCode: HttpCode
    public description: string
    public isOperational?: boolean | undefined

    private constructor(public code: number, public message: string) { 
        super(message)
        this.httpCode = code
        this.description = message
        this.isOperational = true
    }
    
    static instance: DuplicateUser = new DuplicateUser(this.CODE, this.DUPLICATE_USER);
}
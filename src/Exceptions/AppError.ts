import { HttpCode } from '../types/ExceptionTypes';


interface AppErrorArgs {
    name?: string;
    httpCode: HttpCode;
    description: string;
    isOperational?: boolean;
}

//Create the AppError class
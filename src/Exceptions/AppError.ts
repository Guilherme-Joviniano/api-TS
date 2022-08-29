import { HttpCode } from '../types/HtppCodes';


interface AppErrorArgs {
    name?: string;
    httpCode: HttpCode;
    description: string;
    isOperational?: boolean;
}

//Create the AppError class
import { HttpCode } from './HtppCodes';

export default interface AppErrorArgs {
    name?: string;
    httpCode: HttpCode;
    description: string;
    isOperational?: boolean;
}


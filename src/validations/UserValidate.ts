import { HttpCode } from '../types/HtppCodes';
import { UserModel } from '../models/user';
import { UserEnum } from '../types/UserEnum';
import { Response } from 'express';
import { TypedResponseBody } from '../types/TypedResponseBody';
import validator from 'validator';

const validateUser = (req: TypedResponseBody<UserModel>, res: Response): Response | undefined => {
    const { email, firstName, lastName, password } = req.body

    if (!email || !firstName || !lastName || !password) {
        return res.status(HttpCode.BAD_REQUEST).json({
            message: ['Invalid fields to store a user!']
        })
    }

    if (!(validator.isEmail(email))) {
        return res.status(HttpCode.BAD_REQUEST).json({
            message: ['Invalid Email!']
        })
    }

    if (password.length < UserEnum.MIN_PASSWORD_LENGTH) {
        return res.status(HttpCode.BAD_REQUEST).json({
            message: ['Invalid Password!']
        })
    }
};


export default validateUser
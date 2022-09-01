import { Schema, model } from "mongoose";
import validator from "validator";

export class UserModel {
    constructor(public email: string, public password: string, public firstName: string, public lastName?: string) { }
    
    public static checkEmail = (email: string): boolean => {
        if (email) return false;
        return validator.isEmail(email);
    };
    
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    password: {
        type: String,
        required: true,
    },
    instagram_id: String,
    tiktok_id: String
})



export const User = model('User', userSchema)


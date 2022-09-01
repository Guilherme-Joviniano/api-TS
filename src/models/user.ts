import { Schema, model } from "mongoose";


export class UserType {
    constructor(public email: string, public password: string, public firstName: string, public lastName?: string) {}
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


import mongoose from 'mongoose'
import { type } from 'node:os';

const userSchema = new mongoose.Schema({
    name : String,
    password : String,
    email : String,
    role : {
        type : String,
        enum : ['user','admin'],
        default : 'user'
    }
})

const User = mongoose.model("user",userSchema);
export {User}


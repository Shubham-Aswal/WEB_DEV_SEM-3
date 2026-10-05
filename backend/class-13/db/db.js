import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : String,
    password : String,
    email : String,
    resetPasswordToken : String,
    resetPasswordExpires : Date,
    role : {
        type : String,
        enum : ['user','admin'],
        default : 'user'
    }
})

const User = mongoose.model("user",userSchema);
export {User}


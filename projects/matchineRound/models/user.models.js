import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name : { 
        type : String
    },
    email : { 
        type :String
    },
    password : {
        type : String
    },
    role :{
        type : String,
        enum : ['user','admin']
    }
})

 const User = mongoose.model("user",userSchema)
 export default User
import express from "express"
import bcryptjs from "bcryptjs"
import {User} from "./db/db.js"
import { error } from "node:console"
import cors from "cors"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
const app = express()

app.use(express.json())
app.use(cors())

// this file contains content of class 13 and 14


mongoose.connect("mongodb://localhost:27017/vedamTest").then(()=>{
    console.log("connected to db....")
})



app.post("/signup", async(req,res)=>{
   let {name,email,passWord,role}=req.body
  let findData= await User.findOne({email})
  console.log(findData,"hjehehe");
  
  if(findData){
   return res.send("user jinda haii....")
  }else{
     let updateddP=   await bcryptjs.hash(passWord,10)
     console.log(updateddP,"dekhoooooo");
     
 let UserInfo=  new User({
      name,email,
      password:updateddP,
      role :  role || 'user'

   })
      await UserInfo.save()
      return res.send("done.......")
  }


})
const auth = (req,res,next)=>{
    let token  = req.headers.authorization;
    if(!token){
        return res.send("invalid access...")
    }
    let data = jwt.verify(token,"abcdefgh")
    console.log(data)
    req.user = data
    next()
}
function roleCheck(Role){
    return (req,res,next)=>{
    let role = req.user.role
    console.log(role)
    if(Role != role){
         res.send("unauthorized user .. ")
    }
    next()
   
    }
}

app.post("/login",async (req,res)=>{
    let {email,passWord} = req.body

    let user = await User.findOne({email})
    if(!user){
        res.send("user already exist")
    }
    try {
         let checkPassword =  bcryptjs.compare(passWord,user.password)
    if(!checkPassword){
        res.send("invalid password")
    }
        
    } catch  {
        res.send("password not valid")
        
    }
    let wbToken = jwt.sign({
            email: user.email,
            role: user.role
    },"abcdefgh")
    
    res.status(200).json({"msg" : "user loggedin successfully",data : {wbToken}})
})

app.get("/api",auth,roleCheck("admin"),(req,res)=>{
    res.send("api access granted")
})
 

app.get("/me",auth,async (req,res)=>{
    let data = req.user
    res.send(data)
})


app.put("/me",auth,async(req,res)=>{
    const {newName} = req.body;

    const user = await User.findByIdAndUpdate(req.user._id,{name : newName},{new : true})
    console.log(user)
    if(!user){
        res.send('unable to update user name')
    }
    filterUser = user.select("- password")
    res.send(filterUser)
})

app.patch("/users/:id/role",auth,roleCheck('admin'),async (req,res)=>{
    let {id} = req.params
    let {newRole} = req.body 

    let user = await User.findOneAndUpdate({email : req.user.email},{role : newRole})
    if(!user){
        res.send("invalid user")
    }
    res.send("role updated successfully")

})



app.listen(3000,()=>{
   console.log("server......");
   
})






import express from "express"
import bcryptjs from "bcryptjs"
import {User} from "./db/db.js"
import { error } from "node:console"
import mongoose from "mongoose"
const app = express()

app.use(express.json())


mongoose.connect("mongodb://localhost:27017/vedamTest").then(()=>{
    console.log("connected to db....")
})



app.post("/signUp", async(req,res)=>{
   let {name,email,passWord}=req.body
  let findData=   await User.findOne({email})
  console.log(findData,"hjehehe");
  
  if(findData){
   return res.send("user jinda haii....")
  }else{
     let updateddP=   await bcryptjs.hash(passWord,10)
     console.log(updateddP,"dekhoooooo");
     
 let UserInfo=  new User({
      name,email,
      passWord:updateddP

   })
      await UserInfo.save()
      res.send("done.......")
  }


})


app.post("/login",async (req,res)=>{
    let {email,password} = req.body

    let user = await User.findOne({email})
    if(!user){
        res.send("user already exist")
    }
    let checkPassword = bcryptjs.compare(password,user.password)
    if(!checkPassword){
        res.send("invalid password")
    }
    res.status(200).json({"msg" : "user loggedin successfully"})
})




// 123 => abc => acb




// app.post('/',async(req,res)=>{
//    let {name,email,passWord}=req.body

//  let UserData=  new User({
//       name,email,passWord
//    })
//      await UserData.save()
//      res.send("doneeee")


//    // console.log(name,email,passWord);
   

// })


app.listen(3000,()=>{
   console.log("server......");
   
})






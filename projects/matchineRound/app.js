import cookieParser from "cookie-parser"
import express from "express"
import User from "./models/user.models"
import mongoose, { mongo } from "mongoose"
import jwt from "jsonwebtoken"
 app = express()
 app.use(express.json())
 app.use(cookieParser())

app.use(async (req,res,next)=>{

    const token = req.cookies?.accessToken || req.headers.authentication

    if(!token){
        res.send("invalid token .. ")
    }

    let data = jwt.verify(token,"abcdef")
    const user = await User.findById(decodedToken._id).select("-password")
        if(!user){
            res.send("user does not exist  ...")
        }
        req.user  = user;
        next()
})
















 app.listen(3000,()=>{
    console.log("server running on port 3000")
 })
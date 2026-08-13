// import os from "os";
// console.log(os.totalmem()/1024/1024/1024)
// console.log(os.freemem()/1024/1024/1024)
// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.uptime()/3600)
// import http from "http";

// const server = http.createServer((req,res)=>{

//     if(req.url == "/"){
//         res.end("hello world ")
//     }
//     else if(req.url == "/home"){
//         res.write("-__-  ")
//         res.end("spiderman - no way home ")
//     }
//     else{
//         res.end("not found 404")
//     }

    
    
    
  
// })


// server.listen(3000,()=>{
//     console.log("server start sequence initiated ... ")
//     console.log("started")
// })


import express from "express"
import { log } from "node:console";


const app = express();

app.use(express.json());
// app.use(()=>{
//     console.log("main nhi jane dunga..  ")
// })
app.use((req,res,next)=>{
    console.log("hello")
    next()
})

app.get("/",(req,res)=>{
    res.send("hii...")
})
app.post("/",(req,res)=>{
    res.send("hii...post-opt")
})




app.listen(3000,()=>{
    console.log("server is running..")
})
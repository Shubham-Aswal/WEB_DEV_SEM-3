import os from "os"
import http from "http"
// console.log(os.platform())
// console.log(os.cpus())
// console.log((os.totalmem()/(1024**3)).toFixed(2))
// console.log((os.freemem()/(1024**3)).toFixed(2))
// console.log(os.uptime()/3600)

// let server = http.createServer((req,res)=>{
//     console.log(`request url : ${req.url}`)
//     res.end("welcome to my server")

// })

// server.listen(3000,()=>{
//     console.log("server has started")
// })


let server2 = http.createServer((req,res)=>{
    let val = req.url
    if(val === "/"){
        res.end("home page")
    }
    else if(val === "/products"){
        res.end("Our Products")
    }
     else if(val === "/login"){
        res.end("Login Page")
    }
    else{
        res.statusCode = 404
        res.end("Page Not Found")
    }
})

server2.listen(3000,()=>{
    console.log("server is running on port 3000")
})





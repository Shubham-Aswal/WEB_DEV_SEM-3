import express from "express"


const app = express()
app.use((req,res,next)=>{
    console.log(req.url);
    next()
})

app.get("/",(req,res)=>{
    res.end("home page")
})
app.get("/products",(req,res)=>{
    res.end("products")
})
app.post("/login",(req,res)=>{
    res.end("login page")
})
app.get("/contact",(req,res)=>{
    res.end("Contact Page")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

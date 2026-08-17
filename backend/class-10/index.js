import express from "express"

const app = express()
app.use(express.json());

app.get("/",(req,res)=>{
    res.end("h1")
})

app.get("/user/:id",(req,res)=>{
    let {id} = req.params;
    res.end(id);
})

app.get("/data",(req,res)=>{
    
    console.log(req.query)
})
app.post("/values",(req,res)=>{
    
    console.log(req.body)
    res.status(200).json({"dataFetched" : true})
})



app.listen(3000,()=>{
    console.log("app running on 3000")
})
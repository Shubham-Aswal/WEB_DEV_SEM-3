import fs from "fs"

// fs.writeFile("test.txt","initial values",()=>{
//     console.log('created successfully..')
// })
// let data = fs.readFile("test.txt",()=>{
//     console.log("data fetched..")
// })

// fs.unlinkSync("test.txt")
// data.then((val)=>{console.log(val.toString())})

// fs.mkdirSync("testdata")
// fs.writeFileSync("testdata/index.txt","initial commit",()=>{
//     console.log("created ... ")
// })
// fs.mkdirSync("nodata")
fs.rmdirSync("nodata");
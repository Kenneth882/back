const express=require('express')

const app=express()

app.get("/hello", (req,res)=> {
    res.json({message: "Hello world"})
})

//req and res
//req is request
//res is response

const PORT = 5001;
//8080 use a free port

app.listen(PORT,()=> {
 console.log(`server running on PORT ${PORT}`)
})

//HTTP, Get,post,put,delete
// to reach server run localhost:5001
//  http://localhost:5001

//AUTH
//GET
//USERS
//WATCHLIST
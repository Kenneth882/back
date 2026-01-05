import express from 'express'
// Use import or request

const router=express.Router()
//^used to create a router

router.get("/",(req,res)=> {
    res.json({httpMethod: "get"});
})

router.post("/",(req,res)=> {
    res.json({httpMethod: "post"});
})


router.get("/",(req,res)=> {
    res.json({httpMethod: "put"});

})

router.delete("/",(req,res)=> {
    res.json({httpMethod: "delete"});
})







export default router
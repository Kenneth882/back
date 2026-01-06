import express from 'express'
import {register} from "../controllers/authController.js"
// Use import or request

const router=express.Router()
//^used to create a router

router.post("/register",register)


export default router
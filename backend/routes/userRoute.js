import express from "express"
import { register,login,logout,getOtherUser } from "../controllers/usercontroller.js"
import isAuthenticate from "../middleware/isAuthenticate.js"


const router=express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/search").get(isAuthenticate,getOtherUser)

export default router
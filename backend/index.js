import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

// here database import form databse.js
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
dotenv.config({})
const app=express()
const PORT=process.env.PORT || 8080

// for body parse
app.use(express.json())
// use cookie_pareser
app.use(cookieParser())
// routes
// how it look loke->http://localhost:8080/api/v1/user/register
app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

app.listen(PORT,()=>{
    connectDB()
    console.log(`server start at port ${PORT}`);
})
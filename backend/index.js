import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

// here database import form databse.js
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cors from 'cors'
dotenv.config({})
const app=express()
const PORT=process.env.PORT || 8080

// for body parse
app.use(express.json())
// use cookie_pareser
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

// to connect backend and fornted url to communicate with each other

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
  };
  app.use(cors(corsOptions));
  
// routes
// how it look loke->http://localhost:8080/api/v1/user/register
app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)


app.listen(PORT,()=>{
    connectDB()
    console.log(`server start at port ${PORT}`);
})
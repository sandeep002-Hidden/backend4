import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDb from "./db/connectToDb.js"
dotenv.config({
    path:"./env"
})

connectDb()
.then((err)=>{
    app.listen(process.env.PORT||5000)
})
.catch((err)=>{
    console.log("Error occur While connection !!!"+err)
})
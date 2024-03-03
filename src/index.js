import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDb from "./db/connectToDb.js"
dotenv.config({
    path:"./env"
})

connectDb()
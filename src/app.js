import express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./route/user.route.js";
import {healthCheckRouter} from "./route/healthCheck.route.js";
import { errorhandeller } from "./middleware/error.middleware.js";
 
app.use("/api/v1/user",userRouter)
app.use("/api/v1/healthcheck",healthCheckRouter)
// app.use(errorhandeller)
export {app}
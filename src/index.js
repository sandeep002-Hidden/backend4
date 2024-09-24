import dotenv from "dotenv"
import connectDb from "./db/connectToDb.js"
import {app} from './app.js'
dotenv.config({
    path:"./env"
})

connectDb()

.then((err)=>{
    app.listen(process.env.PORT||5000)
    console.log(`App is running  at Port ${process.env.PORT}`)
})
.catch((err)=>{
    console.log("Error occur While connection !!!"+err)
})
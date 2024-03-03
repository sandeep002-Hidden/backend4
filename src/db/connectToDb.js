import mongoose from "mongoose"
import {dbName} from "../constants.js"
const connectDb= async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log("Connected to Database")
    } catch (error) {
        console.log("Error occur"+error)
    }
}
export default connectDb;
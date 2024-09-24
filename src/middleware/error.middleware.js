import mongoose from "mongoose";

import { ApiError } from "../utils/ApiError.js";

const errorhandeller=(err,req,res,next)=>{
let error=err
if(!(error instanceof ApiError)){
    const statuscode=error.statuscode|| error instanceof mongoose.Error?400:500
    const message=error.message||"something went wrong"
    error=new ApiError(statuscode,message,error?.error||[],err.stack)

}
const response={
    ...error,
    message:error.message,
    ...new ApiError(process.env.NODE_ENV==="devlopment"?{stack:error.stack}:{})
}
return res.status(error.statuscode).json(response)
}
export {errorhandeller}
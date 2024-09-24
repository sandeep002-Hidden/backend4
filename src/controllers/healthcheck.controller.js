import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandeler } from "../utils/AsyncHandler.js";

const healthCheck=asyncHandeler(async(req,res)=>{
    return res.status(200).json(
        new ApiResponse(200,"ok","Healthcheck passed")
    )
})
export {healthCheck}
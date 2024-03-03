import {asyncHandeler} from "../utils/AsyncHandler.js"

const registeruser=asyncHandeler(async(req,res)=>{
    res.status(200).json({
        message:"OK"
    })
})
export {registeruser}
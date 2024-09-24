import { asyncHandeler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary,deleteFromCloudinary } from "../utils/cloudnairy.js"
import e from "cors"
import {ApiResponse} from "../utils/ApiResponse.js"
const registerUser = asyncHandeler(async (req, res) => {
    const { fullName, email, username, password } = req.body
    if (
        [fullName, email, username, password].some(
            (fields) => fields?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All fields are required")
    }
    const existedUser=await User.findOne({$or:[{username},{email}]})
    if(existedUser){
        throw new ApiError(409, "User with email or username alread exists")
    }
    const avatarlocalpath = req.files?.avatar[0]?.path
    const coverLocalPath = req.files?.coverImage[0]?.path
    if(!avatarlocalpath){
        throw new ApiError(400,"Avaar file is required")
    }
    const avatar= await uploadOnCloudinary(avatarlocalpath)
    console.log(avatar)
    let coverImage;
    if(coverLocalPath){
        coverImage= await uploadOnCloudinary(coverLocalPath)
    }
    try {
        const user=await User.create({
            fullName,
            avatar:avatar.url,
            coverImage:coverImage.url||"",
            email,
            password,
            username:username.toLowerCase()
        })
        
        const creatdUser=await User.findById(user._id).select("-password  -refreshToken")
        if(!creatdUser){
            throw new ApiError(500,"Somehing Went wrong while user registation")
        }
    
        return res.status(201).json(new ApiResponse(201,creatdUser,"User Registered successfully"))
    } catch (error) {
        console.log("user creating failed")
        if(avatar){
            await deleteFromCloudinary(avatar.public_id)
        }
        if(coverImage){
            await deleteFromCloudinary(avatar.public_id)
        }
        throw new ApiError(500,"Somehing Went wrong while user registation and images ware deleted")

    }
})
export { registerUser }

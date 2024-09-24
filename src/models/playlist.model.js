import mongoose, { Schema } from "mongoose";
import { video } from "./video.model";


const playListSchema=new Schema({ 
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    video:[
        {
            type:Schema.Types.ObjectId,
            ref:"vedio"
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

},{timestamps:true}
)


export const PlayList=mongoose.model("playlist",playListSchema)
 
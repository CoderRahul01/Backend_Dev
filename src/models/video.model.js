import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate
from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema({
        videoFile:{
            type:String ,//Cloudnury url
            required: true,

        },
        thumbnail:{
            type:String, //cloudnary url
            required: true,
        },
        title:{
            type:String, 
            required: true,
        },
        description:{
            type:String, //cloudnary url
            required: true,
        },
        duration:{
            type:String, //cloudnary url
            required: true,
        },
        views:{
            type:Number,
            default: 0,
        },
        published:{
            type: Boolean,
            default: true,
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref: "Users"
        }
},
{
    timestamps:true
})





videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose("Video",videoSchema)
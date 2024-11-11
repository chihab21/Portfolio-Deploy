import mongoose from "mongoose";

const jobTypeSchema = new mongoose.Schema({
    JobTypeName: {
        type: String,
        required: [true, 'JobType is required'],
        maxlength: 32
    },
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true});

const JobType= mongoose.model("JobType", jobTypeSchema);
export default JobType

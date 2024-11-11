import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        maxlength: 32
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    salary: {
        type: String,
        required: [true, 'Salary is required']
    },

    location: {
        type: String,

    },
    JobType:{
       type: mongoose.Schema.Types.ObjectId,
        ref: "JobType"

    },
    available: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true});

const Job= mongoose.model("Job", jobSchema);
export default Job

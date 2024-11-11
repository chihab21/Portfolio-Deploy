import mongoose from "mongoose";
import bcrypt from "bcrypt"


const jobsHistorySchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
    },
    interviewDate: {
        type: Date,
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },



}, { timestamps: true })



const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'firstName is required'],
        maxlength:32,
        trim:true
    },
    lastName:{
        type:String,
        required:[true,'lastName is required'],
        maxlength:32,
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        maxlength:32,
        trim:true,
        unique:true,

    },
    password:{
        type:String,
        required:[true,'password is required'],
        minlength:[6,'password must have 6 caracters.'],
        trim:true,

        
    },
    jobsHistory: [jobsHistorySchema],

    role:{
        type:Number,
        default:0
    }
},{timestamps:true})

userSchema.pre('save',async function (next) {
    this.password=await bcrypt.hash(this.password,10)
    next()
})

const User = mongoose.model('User', userSchema);
export default User;
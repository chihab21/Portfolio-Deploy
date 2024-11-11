import mongoose from "mongoose"



export const Connect= async()=>{

    try {
        
        const connect=await mongoose.connect(`${process.env.Mongo_Url}`)
        if(connect){
            console.log('Connected to DataBase');
            
        }
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
        
    }

}
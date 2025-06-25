// we can connect to mongodb server

import mongoose from "mongoose"; 


 export const connectDB = async() =>{
    try{
    await mongoose.connect('process.env.MONGO_URI')
    console.log("MongoDB connected");
    } catch(error){
        console.log("MongoDB Connection failed",
        error.message);
        process.exit(1);

    }
}
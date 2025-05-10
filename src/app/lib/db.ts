import mongoose from "mongoose";

export const connectDB = async () => {
    const mongodbUrl = process.env.MONGODB_URI as string;

    mongoose.connect(mongodbUrl)
    .then(()=>{
        console.log("Connected DB")
    }).catch((error)=>{
        console.log("Dont able to connect DB", error);
    });
};
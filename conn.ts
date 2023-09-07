import mongoose, { ConnectOptions } from "mongoose";

export const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGODB_URI as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions)
    console.log("Mongo DB Running")
}
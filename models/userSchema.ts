import mongoose, { Schema, model, ObjectId } from "mongoose";

interface User {
    userName: string;
    email: string;
    phoneNumber: string;
    otpToken: string;
    expirationTime: string;
    addresses: Array<any>
}

const userSchema = new Schema<User>({
    userName: { type: String },
    email: { type: String },
    phoneNumber: { type: String, required: true },
    otpToken: { type: String },
    expirationTime: { type: String },
});

export default model<User>("user", userSchema);
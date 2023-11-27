import { Schema, model } from "mongoose";

interface User {
  email: string;
  otpToken: string;
  expirationTime: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: Array<any>;
}

const userSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true },
    otpToken: { type: String },
    expirationTime: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    address: { type: [{}] },
  },
  { versionKey: false }
);

export default model<User>("user", userSchema);

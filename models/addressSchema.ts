import mongoose, { Schema, model, ObjectId } from "mongoose";

interface Address {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
}
const addressSchema = new Schema<Address>(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: Number },
    address: { type: String },
  },
  { versionKey: false }
);

export default model<Address>("address", addressSchema);

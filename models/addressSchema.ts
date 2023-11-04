import mongoose, { Schema, model, ObjectId } from "mongoose";

interface Address {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  userId: [ObjectId];
}
const addressSchema = new Schema<Address>(
  {
    name: { type: String },
    email: { type: String, unique: true },
    phoneNumber: { type: Number },
    userId: { type: [mongoose.Types.ObjectId] },
    address: { type: String },
  },
  { versionKey: false }
);

export default model<Address>("address", addressSchema);

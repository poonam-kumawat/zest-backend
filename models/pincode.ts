import { Schema, model } from "mongoose";

interface Pincode {
  pincode: string;
  name: string;
}

const pincodeSchema = new Schema<Pincode>({
  pincode: { type: String, required: true },
  name: { type: String, required: false },
});

export default model<Pincode>("pincode", pincodeSchema);

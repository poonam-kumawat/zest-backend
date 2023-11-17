import { Schema, model } from "mongoose";

interface Order {
  order_id: string;
  razorpay_paymentId: string;
  address: string;
  addressId: string;
  totalAmount: number;
  email: string;
  items: Array<any>;
  name: string;
  phoneNumber: number;
  totalItemCount: number;
}
const orderSchema = new Schema<Order>(
  {
    order_id: { type: String }, //razorpay
    razorpay_paymentId: { type: String }, //razorpay
    address: { type: String },
    addressId: { type: String },
    totalAmount: { type: Number },
    email: { type: String },
    items: { type: [{}] },
    name: { type: String },
    phoneNumber: { type: Number },
    totalItemCount: { type: Number },
  },
  { versionKey: false }
);

export default model<Order>("order", orderSchema);

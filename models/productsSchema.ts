import { Schema, model, ObjectId } from "mongoose";

interface Produts {
  productName: string;
  price: number;
  quantity: number;
  categories: string;
  product_description: string;
  image: string;
}

const productSchema = new Schema<Produts>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  categories: { type: String, required: true },
  product_description: { type: String },
  image: { type: String },
});

export default model<Produts>("product", productSchema);

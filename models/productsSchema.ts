import mongoose, { Schema, model, ObjectId } from "mongoose";

interface Produts {
  productName: string;
  price: string;
  quantity: string;
  categories: string;
  product_description: string;
  image: string;
  categoryIds: [ObjectId];
}

const productSchema = new Schema<Produts>({
  productName: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  categories: { type: String, required: true },
  product_description: { type: String },
  image: { type: String },
  
  categoryIds: { type: [mongoose.Types.ObjectId] },
});

export default model<Produts>("product", productSchema);

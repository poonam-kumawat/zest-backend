import { Schema, model } from "mongoose";

interface Categories {
  categories: string;
}

const categorySchema = new Schema<Categories>({
  categories: { type: String, required: true },
});

export default model<Categories>("categories", categorySchema);

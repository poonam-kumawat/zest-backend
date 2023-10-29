import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connectToMongo } from "./conn";
import productRouter from "./routes/productRoute";
import categoryRouter from "./routes/categoryRoute";
import emailRouter from "./routes/userRoutes";
import userRouter from "./routes/userRoutes";
import { authorize } from "./middleware/authorize";
import pincodeRouter from './routes/pincodeRoute';

dotenv.config();

connectToMongo();

const app: Express = express();
const port = process.env.PORT;
const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/category", authorize, categoryRouter);
app.use("/api/user", userRouter);
app.use("/api/pincode", pincodeRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

import express, { Request, Response } from "express";
const productRouter = express.Router();
import productsSchema from "../models/productsSchema";

// router.route("/").post(async (req:Request, res:Response) => {
//     console.log(req.body,"string");
//     const data=await productsSchema.create(req.body);
//     console.log(data,"dtaaa");
//     return res.status(200).send(data);

// });
//Find all products
productRouter.route("/").get(async (req: Request, res: Response) => {
  const data = await productsSchema.find({});
  return res.status(200).send(data);
});

//Product filter api
productRouter.route("/").post(async (req: Request, res: Response) => {
  const filter = req.body;
  const data = await productsSchema.find(filter);
  return res.status(200).send(data);
});

export default productRouter;

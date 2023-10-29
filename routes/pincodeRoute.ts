import express, { Request, Response } from "express";
const pincodeRouter = express.Router();

import pincodeSchema from "../models/pincode";

//Find all categories
pincodeRouter.route("/").post(async (req: Request, res: Response) => {
  const filter = req.body;
  const data = await pincodeSchema.findOne(filter);
  return res.status(200).send(data);
});

export default pincodeRouter;

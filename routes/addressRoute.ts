import express, { Request, Response } from "express";
const addressRouter = express.Router();

import addressSchema from "../models/addressSchema";

//Find all categories
addressRouter.route("/address").post(async (req: Request, res: Response) => {
  const filter = req.body;
  const data = await addressSchema.findOne(filter);
  return res.status(200).send(data);
});



export default addressRouter;

import express, { Request, Response } from "express";
const addressRouter = express.Router();

import addressSchema from "../models/addressSchema";

addressRouter
  .route("/get-addressdetails")
  .post(async (req: Request, res: Response) => {
    try {
      ///user id will be taken by token
      const { email, name, address, phoneNumber } = req.body;
      console.log(req.body);
      const createAddress = {
        email: email,
        name: name,
        address: address,
        phoneNumber: phoneNumber,
      };
      const insertedAddresses = await addressSchema.create(createAddress);
      return res.status(201).json(insertedAddresses);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

export default addressRouter;
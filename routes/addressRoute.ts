import express, { Request, Response } from "express";
const addressRouter = express.Router();

import addressSchema from "../models/addressSchema";
import mongoose from "mongoose";

addressRouter.route("/").post(async (req: Request, res: Response) => {
  try {
    ///user id will be taken by token
    const { email, name, address, phoneNumber } = req.body;
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

addressRouter.route("/get").post(async (req: Request, res: Response) => {
  try {
    const filter = req.body;
    const data = await addressSchema.find(filter);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

addressRouter.route("/").put(async (req: Request, res: Response) => {
  try {
    const filter = req.body;
    if (filter.id === undefined) {
      throw new Error("Id is required!");
    }
    const data = await addressSchema.findByIdAndUpdate(filter.id, filter, {
      upsert: false,
    });
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

addressRouter.route("/:id").delete(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("Id is required!");
    }
    const data = await addressSchema.findByIdAndDelete(id);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default addressRouter;

import express, { Response } from "express";
import uniqid from "uniqid";

import Razorpay from "razorpay";
import crypto from "crypto";
import orderSchema from "../models/orderSchema";

const paymentRouter = express.Router();

paymentRouter.route("/orders").post(async (req: any, res: Response) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_SECRET as string,
    });

    const options = {
      amount: req.body.totalAmount * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: uniqid(),
      notes: {
        userEmail: req.email,
      },
    };
    const order = await razorpay.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error || "Bad Request. Please Try Again",
    });
  }
});

paymentRouter.route("/verify").post(async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      orderDetails,
    } = req.body;

    // Creating our own digest
    let body = razorpayOrderId + "|" + razorpayPaymentId;
    const shasum = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET as string)
      .update(body.toString())
      .digest("hex");

    if (shasum !== razorpaySignature) {
      return res.status(400).json({ msg: "Transaction not legit!" });
    }
    
    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
    await orderSchema.create({
      order_id: orderCreationId,
      razorpay_paymentId: razorpayPaymentId,
      ...orderDetails,
    });

    res.status(200).json({
      message: "Payment Success",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default paymentRouter;

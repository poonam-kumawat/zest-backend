import express, { Request, Response, Router, response } from "express";
import { v4 } from "uuid";

import Razorpay from "razorpay";

const paymentRouter = express.Router();

paymentRouter.route("/orders").post(async (req: Request, res: Response) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_SECRET as string,
    });

    const options = {
      amount: req.body.amount || 50000, // amount in smallest currency unit
      currency: "INR",
      receipt: `reciept-1`,
      notes: {
        userId: req.body.user._id,
        userEmail: req.body.user.email,
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

export default paymentRouter;

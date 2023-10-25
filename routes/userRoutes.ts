import express, { Request, Response, Router } from "express";

import { sendOTP } from "../Controller/genrateOTP";
import userSchema from "../models/userSchema";
import * as jwt from "jsonwebtoken";


const userRouter = express.Router();

userRouter.route("/send-otp").post(async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // const otpToken = generateOTP(6);
    const currentTime = new Date().getTime();
    const expirationTime = new Date(currentTime + 2 * 60 * 1000).toISOString();
    const createUser = {
      email: email,
      otpToken: otp,
      expirationTime: expirationTime,
    };
    const user = await userSchema.findOneAndUpdate(
      { email: email },
      { $set: createUser },
      { upsert: true }
    );
    if (user?._id) {
      await sendOTP(email, otp);
      res.status(201).json({
        type: "success",
        message: "OTP sent to mobile number",
        data: {
          userId: user._id,
        },
      });
    } else {
      throw new Error("Bad Request. Please Try Again");
    }
  } catch (error) {
    res.status(500).json({
      message: error || "Bad Request. Please Try Again",
    });
  }
});

userRouter.route("/verify-otp").post(async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  const data: any = await userSchema.findOne({ email }).lean();
  const currentTime = new Date().toISOString();
  if (!email || !otp) {
    return res
    .status(400)
    .json({ success: false, error: "enter valid credientials" });
   }
   const accessToken = jwt.sign({ email: email }, "accessSecret", {
    expiresIn: "30m",
    });
    console.log("accessToken",accessToken)
   const refreshToken = jwt.sign({ email: email }, "refreshSecret", {
    expiresIn: "5d",
    });
    console.log("refress",refreshToken)
    
  try {
    if (otp !== data.otpToken || data.expirationTime <= currentTime) {
      throw new Error("otp Invalid");
    }
    return res.status(200).json({ accessToken,refreshToken });
  } catch (error:any) {
    console.error(error);
    return res.status(401).json({ success: false, msg: error.message });    
  }
  
});

export default userRouter;

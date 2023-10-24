import express, { Request, Response, Router } from "express";

import { sendOTP } from "../Controller/genrateOTP";
import userSchema from "../models/userSchema";

const userRouter = express.Router();

userRouter.route("/").post(async (req: Request, res: Response) => {
  try {
    const { email} = req.body;
    const otp=Math.floor(100000 + Math.random() * 900000).toString();
    // const otpToken = generateOTP(6);
    const currentTime = new Date().getTime()
    const expirationTime = new Date(currentTime + 2 * 60 * 1000).toISOString();
    const createUser = {
      email: email,
      otpToken: otp,
      expirationTime: expirationTime
    }  
    const user = await userSchema.findOneAndUpdate({ email: email }, { $set: createUser }, { upsert: true })
    if (user?._id) {
      await sendOTP(email, otp);
      res.status(201).json({
        type: "success",
        message: "OTP sent to mobile number",
        data: {
          userId: user._id,
        },
      })
    
     } else {
      throw new Error('Bad Request. Please Try Again')
    }
  } catch (error) {
      res.status(500).json({
      message: error || "Bad Request. Please Try Again"
    });
  }
});



// userRouter.route('/').post(async (req: Request, res: Response) => {
//   const filter = req.body;
//   const data = await userSchema.find(filter);
//   return res.status(200).send(data);
// });
// userRouter.route("/").post(async (req: Request, res: Response) => {
//   const { email } = req.body;
//   sendOTP(email);
//   return res.status(200).send(email);
// });

export default userRouter;

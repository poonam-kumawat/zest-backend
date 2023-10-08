import express, { Request, Response } from "express";
import userSchema from "../models/userSchema";
import { generateOTP, sendSMS } from '../utils/generateOTP'
const userRouter = express.Router();

//generate OTP
userRouter.route("/generate-otp").post(async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.body;
    const otpToken = generateOTP(6);
    const currentTime = new Date().getTime()
    const expirationTime = new Date(currentTime + 2 * 60 * 1000);
    const createUser = {
      phoneNumber: phoneNumber,
      otpToken: otpToken,
      expirationTime: expirationTime
    }

    const user = await userSchema.findOneAndUpdate({ phoneNumber: phoneNumber }, { $set: createUser }, { upsert: true })
    if (user?._id) {
      res.status(201).json({
        type: "success",
        message: "OTP sent to mobile number",
        data: {
          userId: user._id,
        },
      })

      await sendSMS(
        {
          message: `Your OTP for Zest is ${otpToken}`,
          contactNumber: user.phoneNumber,
        },
      );
    } else {
      throw new Error('Bad Request. Please Try Again')
    }
  } catch (error) {
    res.status(500).json({
      message: error || "Bad Request. Please Try Again"
    });
  }
})


//Product filter api
userRouter.route('/').post(async (req: Request, res: Response) => {
  const filter = req.body;
  const data = await userSchema.find(filter);
  return res.status(200).send(data);
});


export default userRouter;



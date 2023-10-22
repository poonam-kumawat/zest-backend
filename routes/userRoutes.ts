import express, { Request, Response, Router } from "express";

import { sendOTP } from "../Controller/genrateOTP";

const userRouter = express.Router();
userRouter.route("/").post(async (req: Request, res: Response) => {
  const { email } = req.body;
  sendOTP(email);
  return res.status(200).send(email);
});

export default userRouter;

import express, {Request,Response, Router} from "express";

import { generateOTP, sendOTP } from "../Controller/genrateOTP";


const emailRouter = express.Router();
emailRouter.route('/').post(async (req : Request ,res : Response )=>{
    const { email } = req.body;
    const otp = generateOTP();
    sendOTP(email,otp);
    return res.status(200).send(email);
  });



export default emailRouter;
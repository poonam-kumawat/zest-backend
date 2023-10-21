import dotenv from "dotenv";
import * as nodemailer from "nodemailer";
// import generateOTP from './genrateOTP';
import expressAsyncHandler from "express-async-handler";
dotenv.config();

let transporter = nodemailer.createTransport({
  // host: process.env.SMTP_HOST,
  // port: process.env.SMTP_PORT,
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});


export default transporter;

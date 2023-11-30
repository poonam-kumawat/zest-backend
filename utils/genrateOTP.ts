import dotenv from "dotenv";
import * as nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

dotenv.config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});
// const emailTemplatePath = "./template.html";
const emailTemplatePath = path.join(__dirname, "..", "public", "template.html");
const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

const sendOTP = async (email: string, otp: any) => {
  const emailBody = emailTemplate.replace("{{otp}}", otp);
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Your OTP Code",
    html: emailBody,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email: " + error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info);
      }
    });
  });
};

export { sendOTP };

import dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendOTP = (email: string, otp: any): void => {
  // otp=Math.floor(100000 + Math.random() * 900000).toString();
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Your OTP Code",
    html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export { sendOTP };

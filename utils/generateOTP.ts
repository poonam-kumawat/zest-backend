const fast2sms = require("fast2sms");
import dotenv from 'dotenv';
dotenv.config();

export const generateOTP = (otp_length: number) => {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

const { TWILIO_SERVICE_SID, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true
});
export const sendSMS = async ({ message, contactNumber }: any) => {
  try {
    const res = await client.messages.create({
      body: message,
      messagingServiceSid: TWILIO_SERVICE_SID,
      from: '+12569603482',
      to: `+91${contactNumber}`,
    })
    console.log({ res });
  } catch (error) {
    console.log('error :>> ', error);
  }
};
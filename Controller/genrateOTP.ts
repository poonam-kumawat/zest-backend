// emailService.ts
import transporter from "./emailcontroller";

const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOTP = (email: string,otp:string): void => {
  const mailOptions = {
    from: 'mailpoonam2002@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ' + error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
console.log(transporter.sendMail)

export { generateOTP, sendOTP };

import dotenv from "dotenv";
import * as nodemailer from "nodemailer";
import fs from "fs";

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
// const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

const sendOTP = (email: string, otp: any): void => {
  // const emailBody = emailTemplate.replace("{{otp}}", otp);
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Your OTP Code",
    html: `

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            width: 60%;
            margin: auto;
            overflow: hidden;
        }

        header {
            background: #fff;
            color: #000;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #bbb 1px solid;
        }

        header a {
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }

        header ul {
            padding: 0;
            margin: 0;
            list-style: none;
            overflow: hidden;
        }

        header #logo {
            float: left;
            display: inline;
        }

        header #logo img {
            height: 50px;
            width: auto;
            float: left;
            margin-right: 10px;
        }

        header #logo a {
            text-decoration: none;
        }

        header h1,
        header h2 {
            display: inline;
        }

        header nav {
            float: right;
            margin-top: 30px;
            margin-bottom: 10px;
        }

        header .highlight,
        header .current a {
            color: #f7880a;
            font-weight: bold;
        }

        header a:hover {
            color: #000;
            font-weight: bold;
        }

        header #tagline {
            width: 300px;
            float: left;
            margin-top: 30px;
            font-size: 18px;
        }

        header #tagline h2 {
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 0;
            margin-top: 0;
        }

        header #tagline #callout {
            float: left;
            background: #f7880a;
            border: #f7880a 1px solid;
            padding: 7px 20px;
            border-radius: 5px;
            margin-top: 20px;
            color: #fff;
            font-weight: bold;
            font-size: 14px;
        }

        header #tagline a:hover {
            border-bottom: none;
            color: #fff;
        }

        header #tagline #callout a {
            color: #fff;
            text-decoration: none;
        }

        header #tagline #callout a:hover {
            text-decoration: underline;
        }

        header .last {
            border-bottom: none;
        }

        header a,
        header a:visited {
            border-bottom: 1px solid #bbb;
            color: #000;
            text-decoration: none;
        }

        header nav ul {
            display: inline;
        }

        header #logo img {
            display: none;
        }

        main {
            padding-bottom: 50px;
        }

        .otp-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            margin-top: 50px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .otp-text {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .otp-code {
            font-size: 24px;
            font-weight: bold;
            color: #4DBD7A;
        }
    </style>
</head>

<body>

    <header>
        <div class="container">
            <div id="tagline">
                <h2>Your Groceries, Your Way</h2>
            </div>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="otp-container">
                <p class="otp-text">Your One-Time Password (OTP) for verification is:</p>
                <p class="otp-code">${otp}</p>
                <p class="otp-text">This OTP is valid for a short period. Please do not share it with anyone.</p>
            </div>
        </div>
    </main>
</body>`,
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

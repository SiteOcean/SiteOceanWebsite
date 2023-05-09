import { EMAIL, EMAIL_PASS } from './config';

const nodemailer = require('nodemailer');
const email1 =EMAIL;
const pass1 = EMAIL_PASS;
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Create a Nodemailer transporter with your email service provider's configuration
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: email1,
          pass: pass1,
        },
      });

      // Send email
      transporter.sendMail({
        from: email1,
        to: "tosathishsite@gmail.com",
        subject:"MESSAGE FROM WEBSITE ",
        text: message,
        html:`<h3>Name :${name}</h3><p>email : ${email}</p><p>Message : ${message}</p>`,
      });
      
      res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

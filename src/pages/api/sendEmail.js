import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Create a Nodemailer transporter with your email service provider's configuration
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'sathish5888@gmail.com',
          pass: 'SathisH5563',
        },
      });

      // Send email
      await transporter.sendMail({
        from: 'sathish5888@gmail.com',
        to: "tosathishsite@gmail.com",
        name,
        text: message,
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

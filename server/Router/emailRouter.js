const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // shows sender name and email
      to: process.env.SMTP_EMAIL, // your email to receive messages
      subject: "📨 New Contact Form Submission",
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully! ✅" });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ error: "Failed to send message 😢" });
  }
});

module.exports = router;

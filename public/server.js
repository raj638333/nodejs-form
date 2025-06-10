// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// 🔐 Replace with your Gmail and 16-character app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rajraj638333@gmail.com',         // 💌 your Gmail
    pass: 'txwuonnzrqtjiscu'   // 🔑 Gmail App Password (no spaces)
  }
});

// 🎯 POST route to receive form data
app.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log("📩 Received data:", req.body); // For debugging

  const mailOptions = {
    from: email,
    to: 'rajraj638333@gmail.com', // 📥 where the form email goes (your inbox)
    subject: `Message from ${name}: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email sending error:', error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('✅ Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const fetch = require("node-fetch");



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Define Schema
const formSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  city: String,
  loanType: String,
  message: String,
});
const Form = mongoose.model("Form", formSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Route to Handle Form Submission
app.post("/submit", async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();

    // Send Email Notification with Form Data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Form Submission Confirmation",
      text: `Hello Sir/Madam,\n\nHere is the information provided by client:\n\nName: ${req.body.name}\nMobile: ${req.body.mobile}\nEmail: ${req.body.email}\nCity: ${req.body.city}\nLoan Type: ${req.body.loanType}\nMessage: ${req.body.message}\n\nWe will get back to you soon.\n\nRegards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error submitting form" });
  }
});


app.get("/api/news", async (req, res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();

    if (!data.articles) {
      return res.status(500).json({ message: "Failed to fetch articles", data });
    }

    res.json(data.articles);
  } catch (err) {
    console.error("Backend fetch error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

console.log("Hit /api/news");


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

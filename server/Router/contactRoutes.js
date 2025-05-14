// routes/contactRoutes.js
const express = require("express");
const Contact = require("../Model/contactModel");
const router = express.Router();

// POST: Handle contact form submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a new contact message
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    return res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ message: "Error saving message." });
  }
});

module.exports = router;

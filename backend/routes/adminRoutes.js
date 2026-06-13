const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Generate JWT
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// POST /api/admin/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    res.json({ success: true, token: generateToken(admin._id), username: admin.username });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/admin/setup — run once to create admin (remove after use)
router.post("/setup", async (req, res) => {
  try {
    const existing = await Admin.findOne({ username: req.body.username });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json({ success: true, message: "Admin created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

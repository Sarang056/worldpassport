const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const { protect } = require("../middleware/authMiddleware");

// POST /api/enquiry — submit enquiry (public)
router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/enquiry — get all enquiries (admin only)
router.get("/", protect, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/enquiry/:id — delete enquiry (admin only)
router.delete("/:id", protect, async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Enquiry deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

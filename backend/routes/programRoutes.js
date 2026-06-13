const express = require("express");
const router = express.Router();
const Program = require("../models/Program");
const { protect } = require("../middleware/authMiddleware");

// GET /api/programs — public
router.get("/", async (req, res) => {
  try {
    const programs = await Program.find().sort({ createdAt: -1 });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/programs — admin only
router.post("/", protect, async (req, res) => {
  try {
    const program = new Program(req.body);
    await program.save();
    res.status(201).json({ success: true, data: program });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/programs/:id — admin only
router.put("/:id", protect, async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: program });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/programs/:id — admin only
router.delete("/:id", protect, async (req, res) => {
  try {
    await Program.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Program deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Undergraduate", "Postgraduate", "Doctoral", "Diploma", "Professional", "Language"],
      required: true,
    },
    country: { type: String, required: true },
    duration: { type: String },
    description: { type: String },
    image: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);

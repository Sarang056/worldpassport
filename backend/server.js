const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Working");
});

// Routes
app.use("/api/enquiry", require("./routes/enquiryRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/programs", require("./routes/programRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

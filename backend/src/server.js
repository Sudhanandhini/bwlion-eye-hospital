require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const doctorsRoutes = require("./routes/doctors");
const galleryRoutes = require("./routes/gallery");
const leadershipRoutes = require("./routes/leadership");
const trusteesRoutes = require("./routes/trustees");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorsRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/leadership", leadershipRoutes);
app.use("/api/trustees", trusteesRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || "Server error" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});

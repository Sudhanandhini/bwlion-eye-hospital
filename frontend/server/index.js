import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Appointment booking endpoint (placeholder)
app.post("/api/appointments", (req, res) => {
  const { name, age, phone, email, comments } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ message: "Name and phone are required." });
  }
  // TODO: save to database / send email
  console.log("New appointment request:", req.body);
  res.status(201).json({ message: "Appointment request received." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

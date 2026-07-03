const express = require("express");
const { sendMail } = require("../mailer");

const router = express.Router();

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

router.post("/", async (req, res) => {
  const { hospital, date, time, name, age, phone, email, comments } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  const rows = [
    ["Hospital", hospital],
    ["Preferred Date", date],
    ["Preferred Time", time],
    ["Name", name],
    ["Age", age],
    ["Phone", phone],
    ["Email", email],
    ["Comments", comments],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${label}</td><td>${escapeHtml(value)}</td></tr>`)
    .join("");

  try {
    await sendMail({
      subject: `New Appointment Request — ${name}`,
      html: `<h2>New appointment request from the website</h2><table>${rows}</table>`,
      replyTo: email || undefined,
    });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(502).json({ error: err.message });
  }
});

module.exports = router;

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
  const { name, email, phone, program } = req.body;

  if (!name || (!phone && !email)) {
    return res.status(400).json({ error: "Name and either phone or email are required" });
  }

  const rows = [
    ["Name", name],
    ["E-Mail ID", email],
    ["Phone Number", phone],
    ["Fellowship Program", program],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${label}</td><td>${escapeHtml(value)}</td></tr>`)
    .join("");

  try {
    await sendMail({
      subject: `New Fellowship Application — ${name}${program ? ` (${program})` : ""}`,
      html: `<h2>New fellowship program application from the website</h2><table>${rows}</table>`,
      replyTo: email || undefined,
    });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(502).json({ error: err.message });
  }
});

module.exports = router;

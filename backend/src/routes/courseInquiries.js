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
  const { course, name, email, mobile, message } = req.body;

  if (!name || (!mobile && !email)) {
    return res.status(400).json({ error: "Name and either mobile or email are required" });
  }

  const rows = [
    ["Course", course],
    ["Name", name],
    ["E-Mail ID", email],
    ["Mobile Number", mobile],
    ["Message", message],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${label}</td><td>${escapeHtml(value)}</td></tr>`)
    .join("");

  try {
    await sendMail({
      subject: `New Course Inquiry — ${name}${course ? ` (${course})` : ""}`,
      html: `<h2>New course inquiry from the website</h2><table>${rows}</table>`,
      replyTo: email || undefined,
    });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(502).json({ error: err.message });
  }
});

module.exports = router;

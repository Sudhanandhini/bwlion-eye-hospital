const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return null;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

async function sendMail({ subject, html, replyTo }) {
  const t = getTransporter();
  if (!t) {
    throw new Error("Email is not configured. Set SMTP_USER and SMTP_PASS in backend/.env");
  }
  await t.sendMail({
    from: `"BW Lions Eye Hospital Website" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL || "support@sunsys.in",
    replyTo,
    subject,
    html,
  });
}

module.exports = { sendMail };

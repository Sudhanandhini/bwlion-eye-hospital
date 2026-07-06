const express = require("express");
const pool = require("../db");
const requireAuth = require("../middleware/auth");
const makeUploader = require("../upload");

const router = express.Router();
const upload = makeUploader("popup");

// Public: get current popup config
router.get("/", async (req, res) => {
  const [[row]] = await pool.query("SELECT * FROM site_popup WHERE id = 1");
  res.json(
    row || {
      enabled: false,
      image_path: null,
      heading: "",
      content: "",
      button_text: "",
      button_link: "",
    }
  );
});

// Admin: update the popup config (creates the row on first save)
router.put("/", requireAuth, upload.single("image"), async (req, res) => {
  const { enabled, heading, content, button_text, button_link } = req.body;
  const [[existing]] = await pool.query("SELECT * FROM site_popup WHERE id = 1");
  const imagePath = req.file ? `/uploads/popup/${req.file.filename}` : existing?.image_path || null;

  await pool.query(
    `INSERT INTO site_popup (id, enabled, image_path, heading, content, button_text, button_link)
     VALUES (1, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       enabled = VALUES(enabled),
       image_path = VALUES(image_path),
       heading = VALUES(heading),
       content = VALUES(content),
       button_text = VALUES(button_text),
       button_link = VALUES(button_link)`,
    [
      enabled === "true" || enabled === true ? 1 : 0,
      imagePath,
      heading || "",
      content || "",
      button_text || "",
      button_link || "",
    ]
  );

  const [[row]] = await pool.query("SELECT * FROM site_popup WHERE id = 1");
  res.json(row);
});

module.exports = router;

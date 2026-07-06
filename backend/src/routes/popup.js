const express = require("express");
const pool = require("../db");
const requireAuth = require("../middleware/auth");
const { requireRole } = require("../middleware/auth");
const makeUploader = require("../upload");

const router = express.Router();
const upload = makeUploader("popup");
const requireAdmin = requireRole("admin");

// List all popups (used by both the admin manager and the public site)
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM popups ORDER BY sort_order, id");
  res.json(rows);
});

// Admin: create a new popup
router.post("/", requireAuth, requireAdmin, upload.single("image"), async (req, res) => {
  const { enabled, heading, content, button_text, button_link } = req.body;
  const [[{ maxOrder }]] = await pool.query(
    "SELECT COALESCE(MAX(sort_order), -1) AS maxOrder FROM popups"
  );
  const imagePath = req.file ? `/uploads/popup/${req.file.filename}` : null;
  const [result] = await pool.query(
    `INSERT INTO popups (enabled, image_path, heading, content, button_text, button_link, sort_order)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      enabled === "true" || enabled === true ? 1 : 0,
      imagePath,
      heading || "",
      content || "",
      button_text || "",
      button_link || "",
      maxOrder + 1,
    ]
  );
  const [[row]] = await pool.query("SELECT * FROM popups WHERE id = ?", [result.insertId]);
  res.status(201).json(row);
});

// Admin: update a popup (also used for the quick show/hide toggle)
router.put("/:id", requireAuth, requireAdmin, upload.single("image"), async (req, res) => {
  const [[existing]] = await pool.query("SELECT * FROM popups WHERE id = ?", [req.params.id]);
  if (!existing) return res.status(404).json({ error: "Not found" });

  const { enabled, heading, content, button_text, button_link } = req.body;
  const imagePath = req.file ? `/uploads/popup/${req.file.filename}` : existing.image_path;

  await pool.query(
    `UPDATE popups SET enabled = ?, image_path = ?, heading = ?, content = ?, button_text = ?, button_link = ? WHERE id = ?`,
    [
      enabled === undefined ? existing.enabled : (enabled === "true" || enabled === true ? 1 : 0),
      imagePath,
      heading ?? existing.heading,
      content ?? existing.content,
      button_text ?? existing.button_text,
      button_link ?? existing.button_link,
      req.params.id,
    ]
  );
  const [[row]] = await pool.query("SELECT * FROM popups WHERE id = ?", [req.params.id]);
  res.json(row);
});

// Admin: delete
router.delete("/:id", requireAuth, requireAdmin, async (req, res) => {
  await pool.query("DELETE FROM popups WHERE id = ?", [req.params.id]);
  res.status(204).end();
});

// Admin: reorder (priority for which enabled popup shows first)
router.put("/reorder/positions", requireAuth, requireAdmin, async (req, res) => {
  const { orderedIds } = req.body;
  if (!Array.isArray(orderedIds)) {
    return res.status(400).json({ error: "orderedIds[] is required" });
  }
  await Promise.all(
    orderedIds.map((id, index) =>
      pool.query("UPDATE popups SET sort_order = ? WHERE id = ?", [index, id])
    )
  );
  res.json({ ok: true });
});

module.exports = router;

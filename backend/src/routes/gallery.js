const express = require("express");
const pool = require("../db");
const requireAuth = require("../middleware/auth");
const makeUploader = require("../upload");

const router = express.Router();
const upload = makeUploader("gallery");

// Public: list all images in order
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM gallery_images ORDER BY sort_order, id");
  res.json(rows);
});

// Admin: upload one or more images
router.post("/", requireAuth, upload.array("images", 20), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "At least one image is required" });
  }
  const [[{ maxOrder }]] = await pool.query(
    "SELECT COALESCE(MAX(sort_order), -1) AS maxOrder FROM gallery_images"
  );
  const values = req.files.map((file, i) => [
    `/uploads/gallery/${file.filename}`,
    req.body.caption || null,
    maxOrder + 1 + i,
  ]);
  await pool.query(
    "INSERT INTO gallery_images (image_path, caption, sort_order) VALUES ?",
    [values]
  );
  const [rows] = await pool.query("SELECT * FROM gallery_images ORDER BY sort_order, id");
  res.status(201).json(rows);
});

// Admin: delete
router.delete("/:id", requireAuth, async (req, res) => {
  await pool.query("DELETE FROM gallery_images WHERE id = ?", [req.params.id]);
  res.status(204).end();
});

// Admin: reorder. body: { orderedIds: [id, id, ...] }
router.put("/reorder/positions", requireAuth, async (req, res) => {
  const { orderedIds } = req.body;
  if (!Array.isArray(orderedIds)) {
    return res.status(400).json({ error: "orderedIds[] is required" });
  }
  await Promise.all(
    orderedIds.map((id, index) =>
      pool.query("UPDATE gallery_images SET sort_order = ? WHERE id = ?", [index, id])
    )
  );
  res.json({ ok: true });
});

module.exports = router;

const express = require("express");
const pool = require("../db");
const requireAuth = require("../middleware/auth");
const makeUploader = require("../upload");

const router = express.Router();
const upload = makeUploader("doctors");

// Public: list all doctors, grouped order
router.get("/", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM doctors ORDER BY group_name, sort_order, id"
  );
  res.json(rows);
});

// Admin: create
router.post("/", requireAuth, upload.single("image"), async (req, res) => {
  const { name, role, group_name } = req.body;
  if (!name || !role || !group_name) {
    return res.status(400).json({ error: "name, role, and group_name are required" });
  }
  const [[{ maxOrder }]] = await pool.query(
    "SELECT COALESCE(MAX(sort_order), -1) AS maxOrder FROM doctors WHERE group_name = ?",
    [group_name]
  );
  const imagePath = req.file ? `/uploads/doctors/${req.file.filename}` : null;
  const [result] = await pool.query(
    "INSERT INTO doctors (name, role, group_name, image_path, sort_order) VALUES (?, ?, ?, ?, ?)",
    [name, role, group_name, imagePath, maxOrder + 1]
  );
  const [[doctor]] = await pool.query("SELECT * FROM doctors WHERE id = ?", [result.insertId]);
  res.status(201).json(doctor);
});

// Admin: update
router.put("/:id", requireAuth, upload.single("image"), async (req, res) => {
  const { name, role, group_name } = req.body;
  const [[existing]] = await pool.query("SELECT * FROM doctors WHERE id = ?", [req.params.id]);
  if (!existing) return res.status(404).json({ error: "Doctor not found" });

  const imagePath = req.file ? `/uploads/doctors/${req.file.filename}` : existing.image_path;
  await pool.query(
    "UPDATE doctors SET name = ?, role = ?, group_name = ?, image_path = ? WHERE id = ?",
    [name ?? existing.name, role ?? existing.role, group_name ?? existing.group_name, imagePath, req.params.id]
  );
  const [[doctor]] = await pool.query("SELECT * FROM doctors WHERE id = ?", [req.params.id]);
  res.json(doctor);
});

// Admin: delete
router.delete("/:id", requireAuth, async (req, res) => {
  await pool.query("DELETE FROM doctors WHERE id = ?", [req.params.id]);
  res.status(204).end();
});

// Admin: reorder within a group. body: { group_name, orderedIds: [id, id, ...] }
router.put("/reorder/positions", requireAuth, async (req, res) => {
  const { group_name, orderedIds } = req.body;
  if (!group_name || !Array.isArray(orderedIds)) {
    return res.status(400).json({ error: "group_name and orderedIds[] are required" });
  }
  await Promise.all(
    orderedIds.map((id, index) =>
      pool.query("UPDATE doctors SET sort_order = ? WHERE id = ? AND group_name = ?", [
        index,
        id,
        group_name,
      ])
    )
  );
  res.json({ ok: true });
});

module.exports = router;

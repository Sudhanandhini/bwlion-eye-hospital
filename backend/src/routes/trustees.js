const express = require("express");
const pool = require("../db");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM trustees ORDER BY type, sort_order, id");
  res.json(rows);
});

router.post("/", requireAuth, async (req, res) => {
  const { name, type } = req.body;
  if (!name || !type) return res.status(400).json({ error: "name and type are required" });

  const [[{ maxOrder }]] = await pool.query(
    "SELECT COALESCE(MAX(sort_order), -1) AS maxOrder FROM trustees WHERE type = ?",
    [type]
  );
  const [result] = await pool.query(
    "INSERT INTO trustees (name, type, sort_order) VALUES (?, ?, ?)",
    [name, type, maxOrder + 1]
  );
  const [[row]] = await pool.query("SELECT * FROM trustees WHERE id = ?", [result.insertId]);
  res.status(201).json(row);
});

router.put("/:id", requireAuth, async (req, res) => {
  const { name } = req.body;
  await pool.query("UPDATE trustees SET name = ? WHERE id = ?", [name, req.params.id]);
  const [[row]] = await pool.query("SELECT * FROM trustees WHERE id = ?", [req.params.id]);
  res.json(row);
});

router.delete("/:id", requireAuth, async (req, res) => {
  await pool.query("DELETE FROM trustees WHERE id = ?", [req.params.id]);
  res.status(204).end();
});

router.put("/reorder/positions", requireAuth, async (req, res) => {
  const { type, orderedIds } = req.body;
  if (!type || !Array.isArray(orderedIds)) {
    return res.status(400).json({ error: "type and orderedIds[] are required" });
  }
  await Promise.all(
    orderedIds.map((id, index) =>
      pool.query("UPDATE trustees SET sort_order = ? WHERE id = ? AND type = ?", [index, id, type])
    )
  );
  res.json({ ok: true });
});

module.exports = router;

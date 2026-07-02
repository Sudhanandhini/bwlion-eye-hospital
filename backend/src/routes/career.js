const express = require("express");
const pool = require("../db");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM career_jobs ORDER BY location, sort_order, id"
  );
  res.json(rows);
});

router.post("/", requireAuth, async (req, res) => {
  const { location, title, details } = req.body;
  if (!location || !title) {
    return res.status(400).json({ error: "location and title are required" });
  }
  const [[{ maxOrder }]] = await pool.query(
    "SELECT COALESCE(MAX(sort_order), -1) AS maxOrder FROM career_jobs WHERE location = ?",
    [location]
  );
  const [result] = await pool.query(
    "INSERT INTO career_jobs (location, title, details, sort_order) VALUES (?, ?, ?, ?)",
    [location, title, details || "", maxOrder + 1]
  );
  const [[row]] = await pool.query("SELECT * FROM career_jobs WHERE id = ?", [result.insertId]);
  res.status(201).json(row);
});

router.put("/:id", requireAuth, async (req, res) => {
  const { location, title, details } = req.body;
  const [[existing]] = await pool.query("SELECT * FROM career_jobs WHERE id = ?", [req.params.id]);
  if (!existing) return res.status(404).json({ error: "Not found" });

  await pool.query(
    "UPDATE career_jobs SET location = ?, title = ?, details = ? WHERE id = ?",
    [location ?? existing.location, title ?? existing.title, details ?? existing.details, req.params.id]
  );
  const [[row]] = await pool.query("SELECT * FROM career_jobs WHERE id = ?", [req.params.id]);
  res.json(row);
});

router.delete("/:id", requireAuth, async (req, res) => {
  await pool.query("DELETE FROM career_jobs WHERE id = ?", [req.params.id]);
  res.status(204).end();
});

router.put("/reorder/positions", requireAuth, async (req, res) => {
  const { location, orderedIds } = req.body;
  if (!location || !Array.isArray(orderedIds)) {
    return res.status(400).json({ error: "location and orderedIds[] are required" });
  }
  await Promise.all(
    orderedIds.map((id, index) =>
      pool.query("UPDATE career_jobs SET sort_order = ? WHERE id = ? AND location = ?", [
        index,
        id,
        location,
      ])
    )
  );
  res.json({ ok: true });
});

module.exports = router;

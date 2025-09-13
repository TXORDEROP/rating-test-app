const express = require("express");
const pool = require("../db");
const { authenticate } = require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query(`
    SELECT s.*, COALESCE(AVG(r.rating), 0) AS average_rating
    FROM stores s
    LEFT JOIN ratings r ON s.id = r.store_id
    GROUP BY s.id
  `);
  res.json(result.rows);
});

router.post("/", authenticate, async (req, res) => {
  const { name, email, address } = req.body;
  const ownerId = req.user.id;
  const result = await pool.query(
    "INSERT INTO stores (name, email, address, owner_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, email, address, ownerId]
  );
  res.json(result.rows[0]);
});

router.post("/:id/rate", authenticate, async (req, res) => {
  const { rating } = req.body;
  const storeId = req.params.id;
  const userId = req.user.id;
  try {
    await pool.query(
      "INSERT INTO ratings (user_id, store_id, rating) VALUES ($1, $2, $3) ON CONFLICT (user_id, store_id) DO UPDATE SET rating = $3",
      [userId, storeId, rating]
    );
    res.json({ message: "Rating submitted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

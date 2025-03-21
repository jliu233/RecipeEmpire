const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config({ path: "../.env" });


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  

app.post("/api/signup", async (req, res) => {
  const { email, variant } = req.body;
  if (!email || !variant) return res.status(400).send("Missing data");

  try {
    await pool.query(
      "INSERT INTO signups(email, variant) VALUES($1, $2)",
      [email, variant]
    );
    res.status(201).send("Email stored");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

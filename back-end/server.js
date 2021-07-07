const express = require("express");
const app = express();
const cors = require("cors")

const { Pool } = require("pg");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const pool = new Pool({
  user: "S225693",
  host: "localhost",
  database: "attendance",
  password: "lucianome1",
  port: 5432,
});

// const loginProfile = require("./front-end/src/components/WelcomePage"); // API routes for Student Profiles Screen
// app.use(loginProfile);

app.post("/login", function (req, res) {
  console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;
  if (!req.body.email || !req.body.password) {
    return res.status(404).send("email and password required");
  }

  pool
    .query(
      "SELECT * FROM users INNER JOIN user_type ON users.user_type = user_type.id WHERE email = $1 AND password = $2 ",
      [email, password]
    )
    .then((result) => {
      if (result.rows.length > 0) {
        return res.json(result.rows[0]);
      } else {
        return res.status(404).send("user not available");
      }
    });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

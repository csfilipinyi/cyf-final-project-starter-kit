const router = require("express").Router();
const pool = require("../db");
const authorization = require('../middleware/authorization');

router.get("/dashboard",authorization , async (req, res) => {
    try {
        const user = await pool.query("select * from users where user_id=$1", req.user);
        res.json(user.rows[0]);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
})
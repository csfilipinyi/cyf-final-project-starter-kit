
import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

router.get("/", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, world!" });
	});
});
router.get("/graduates", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		Connection.query('SELECT * FROM graduates', (error, result) => {
				res.json(result.rows);
			})
	});
});

export default router;

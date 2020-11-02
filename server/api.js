import { Router } from "express";
import { Connection } from "./db";
const router = new Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("./utils/jwtGenerator");
const validInfo = require("./middleware/validInfo");
const authorization = require("./middleware/authorization");

router.get("/", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Hello, world!" });
  });
});

router.get("/learningobjectives", (req, res) => {
  Connection.query("select * from learning_objective ", (error, results) => {
    res.json(results.rows);
  });
});
//Edit end point from learning objective

router.get("/", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Welcome to Knowledge Checklist" });
  });
});
// get endpoint to all learning Objectives

router.get("/learningobjectives/:id", authorization, (req, res) => {
  const userId = Number(req.params.id);
  const role = req.user.role;
  const id = req.user.id;

  if (role === "Student" && id !== userId) {
    return res.status(401).json("not authorized");
  }
  const queryLo = `select lo.id, lo.skill, description, ability, date_added, a.student_id  from learning_objective lo 
  left join achievements a on lo.id = a.learning_obj_id 
  where (a.student_id = $1 or a.student_id is null) order by lo.id;`;

  Connection.query(queryLo, [userId], (err, results) => {
    if (err) {
      console.log(err);
    }
    //console.log(results.rows);
    res.json(results.rows);
  });
});
//--------------------------------------Get endpoint for learning objectives--------------------------------------------------

router.get("/learningobjectives/:id/:skill", authorization, (req, res) => {
  const userId = Number(req.params.id);
  const skill = req.params.skill;
  const role = req.user.role;
  const id = req.user.id;

  if (role === "Student" && id !== userId) {
    return res.status(401).json("not authorized");
  }
  const queryLo = `select lo.id, lo.skill, description, ability, date_added, a.student_id  from learning_objective lo 
  left join achievements a on lo.id = a.learning_obj_id 
  where lo.skill = $1 and (a.student_id = $2 or a.student_id is null) order by lo.id;`;

  Connection.query(queryLo, [skill, userId], (err, results) => {
    if (err) {
      console.log(err);
    }
    //console.log(results.rows);
    res.json(results.rows);
  });
});

//--------------Get endpoint for learning objectives for mentors view page------------

router.get("/mentors/:skill", (req, res) => {
  //const userId = Number(req.params.id);
  const skill = req.params.skill;
  const queryLo = `select lo.id, lo.skill, description, ability, date_added, a.student_id from learning_objective lo left join achievements a on lo.id = a.learning_obj_id 
  where lo.skill = $1 order by lo.id;`;

  Connection.query(queryLo, [skill], (err, results) => {
    if (err) {
      console.log(err);
    }
    //console.log(results.rows);
    res.json(results.rows);
  });
});

//----------------------------------------------Get mentors endpoint fo learning objectives----------------------------------

router.get("/learningobjective/:skill", (req, res) => {
  let skill = req.params.skill;
  const queryLearningOb = `SELECT * FROM learning_objective  where skill = $1 order by id`;
  Connection.query(queryLearningOb, [skill], (err, results) => {
    if (!err) {
      res.json(results.rows);
    }
  });
});

// get list of students

router.get("/students", authorization, async (req, res) => {
  const role = req.user.role;
  if (role !== "Mentor") {
    return res.status(401).json("not authorized");
  }
  const query = `select user_id, first_name, last_name from users where user_role = 'Student' order by first_name asc`;
  try {
    const results = await Connection.query(query);
    res.json(results.rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

//-----------------------------------Edit end point from learning objective----------------------------------------
router.put("/learningobjectives/:id", (req, res) => {
  let id = req.params.id;
  let description = req.body.description;
  Connection.query(
    "update learning_objective set description = $1 where id = $2 ",
    [description, id],
    function (err, results) {
      if (!err) {
        if (results.rowCount == 0) {
          res
            .status(404)
            .json(`Learning objective with the id: ${id} does not exist`);
        } else {
          res.json("Learing objective has been updated");
        }
      }
    }
  );
});
//post endpoint for learning objective
router.post("/learningobjectives", (req, res) => {
  const { skill, description } = req.body;
  Connection.query(
    "INSERT INTO learning_objective (skill, description)" + "values($1, $2)",
    [skill, description],
    (err, results) => {
      if (!err) {
        res.json({
          message: "your data has been inserted",
          table: "Into the learning objective table",
        });
      }
    }
  );
});
//Post request for signup form

router.post("/register", validInfo, async (req, res) => {
  const {
    firstName,
    lastName,
    userRole,
    userEmail,
    userSlack,
    userPassword,
    userGithub,
    userClassId,
    cyfCity,
  } = req.body;
  try {
    const user = await Connection.query(
      "SELECT * FROM users WHERE user_email = $1",
      [userEmail]
    );
    if (user.rows.length !== 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(userPassword, salt);

    let newUser = await Connection.query(
      "INSERT INTO users (first_name, last_name, user_role,user_email,user_slack,user_password,user_github,class_id, cyf_city)" +
        " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *",
      [
        firstName,
        lastName,
        userRole,
        userEmail,
        userSlack,
        bcryptPassword,
        userGithub,
        userClassId,
        cyfCity,
      ]
    );
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: "Server error" });
  }
});
//-------------------------------post endpoint for learning objective---------------------------------------------------

// router.post("/learningobjectives", (req, res) => {
//   const { skill, description } = req.body;
//   Connection.query(
//     "INSERT INTO learning_objective (skill, description)" + "values($1, $2)",
//     [skill, description],
//     (err, results) => {
//       if (!err) {
//         res.json({
//           message: "your data has been inserted",
//           table: "Into the learning objective table",
//         });
//       }
//     }
//   );
// });

//<---------------------------------------Endpoint abilities ---------------------------------------------->

router.post("/ability", authorization, async (req, res) => {
  const learning_obj_id = Number(req.body.learning_obj_id);
  const ability = Number(req.body.ability);
  const student_id = req.user.id;
  const querySelect = `SELECT * from achievements where learning_obj_id = $1 
                       and student_id = $2  `;
  const queryPost = `INSERT INTO achievements (ability, learning_obj_id, student_id)
                     values($1, $2, $3)`;
  const queryUpdate = `update achievements set  ability= $1
                      where learning_obj_id = $2 and student_id =$3`;

  const results = await Connection.query(querySelect, [
    learning_obj_id,
    student_id,
  ]);

  if (results.rowCount > 0) {
    await Connection.query(queryUpdate, [ability, learning_obj_id, student_id]);

    res.json("updated");
  } else {
    await Connection.query(queryPost, [ability, learning_obj_id, student_id]);
    res.json("inserted");
  }
});
//<------Delete end point from learning objective------>
router.delete("/learningobjectives/:id", (req, res) => {
  const id = Number(req.params.id);
  Connection.query(
    "delete from achievements where learning_obj_id = $1",
    [id],
    (err, results) => {
      if (!err) {
        Connection.query(
          "delete from learning_objective where id =$1",
          [id],
          (err, results) => {
            if (!err) {
              res.json({
                message: `The learning objective with the id: ${id} has been deleted`,
                table: "From learning objective",
              });
            } else {
              res.json("Id not found");
            }
          }
        );
      }
    }
  );
});

//------------------------------------------Post request for signup form-------------------------------------------------------

router.post("/register", validInfo, async (req, res) => {
  const {
    firstName,
    lastName,
    userRole,
    userEmail,
    userSlack,
    userPassword,
    userGithub,
    userClassId,
    cyfCity,
  } = req.body;
  try {
    const user = await Connection.query(
      "SELECT * FROM users WHERE user_email = $1",
      [userEmail]
    );
    if (user.rows.length !== 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(userPassword, salt);

    let newUser = await Connection.query(
      "INSERT INTO users (first_name, last_name, user_role,user_email,user_slack,user_password,user_github,class_id, cyf_city)" +
        " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *",
      [
        firstName,
        lastName,
        userRole,
        userEmail,
        userSlack,
        bcryptPassword,
        userGithub,
        userClassId,
        cyfCity,
      ]
    );
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);

    res.status(500).send({ error: "Server error" });
  }
});

//login route

router.post("/login", validInfo, async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    const user = await Connection.query(
      "select * from users where user_email=$1",
      [userEmail]
    );
    if (user.rows.length === 0) {
      return res.status(401).json("Email is not registered");
    }
    const validPassword = await bcrypt.compare(
      userPassword,
      user.rows[0].user_password
    );
    if (!validPassword) {
      return res.status(401).json("password or email is incorrect");
    }

    const token = jwtGenerator(user.rows[0].user_id, user.rows[0].user_role);
    res.json({
      token: token,
      message: "login successful",
      id: user.rows[0].user_id,
      role: user.rows[0].user_role,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get("/verify", authorization, async (req, res) => {
  try {
    console.log("passed the authorization");
    res.json({ id: req.user.id, role: req.user.role });
  } catch (err) {
    console.error("error", err.message);
    res.status(500).send("Server error");
  }
});

// router.get("/dashboard",authorization , async (req, res) => {
//   try {
//       const user = await Connection.query("select * from users where user_id=1", [req.user.id]);
//       res.json(user.rows[0]);
//   }
//   catch (err) {
//       console.error(err.message);
//       res.status(500).json("server error");
//   }
// })

export default router;

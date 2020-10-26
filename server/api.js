
import { Router } from "express";
import { Connection } from "./db";
const router = new Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require('./utils/jwtGenerator');
const validInfo = require("./middleware/validInfo");
const authorization = require('./middleware/authorization');




router.get("/", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, world!" });
	});
});
router.get("/learningobjectives", (req, res)=>{

  
	Connection.query('select * from learning_objective ', (error, results)=>{
		res.send(results.rows)
	})

})

//Post request for signup form
router.post("/register",validInfo, async (req, res) => {
    const { firstName, lastName, userRole, userEmail, userSlack, userPassword, userGithub, userClassId, cyfCity} = req.body;
    try {
      
      const user = await Connection.query("SELECT * FROM users WHERE user_email = $1", [userEmail]);
       if (user.rows.length !== 0) {
       return res.status(401).json("User already exist!");
      }
      
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(userPassword, salt);

      let newUser = await Connection.query(
        'INSERT INTO users (first_name, last_name, user_role,user_email,user_slack,user_password,user_github,class_id, cyf_city)'+
        ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *' ,
        [firstName, lastName, userRole, userEmail, userSlack, bcryptPassword, userGithub, userClassId, cyfCity]
        );
     const token = jwtGenerator(newUser.rows[0].user_id);
      res.json({ token });
    }
    

    catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
    }
    });

//login route

router.post("/login",validInfo, async (req, res) => {
     
    const { userEmail, userPassword } = req.body;
  try{

const user = await Connection.query("select * from users where user_email=$1", [userEmail]);
if (user.rows.length === 0) {
return res.status(401).json("Email is not registered");
}
    const validPassword = await bcrypt.compare(userPassword, user.rows[0].user_password);
    if (!validPassword) {
      return res.status(401).json("password or email is incorrect");
    }
    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token: token, 'message': 'login successful' })  
}
catch (err) {
console.error(err.message);
res.status(500).send("server error");

}
})


export default router;

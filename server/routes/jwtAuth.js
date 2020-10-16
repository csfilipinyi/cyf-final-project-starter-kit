
import pool from '../db';
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require("../middleware/validInfo");
const authorization = require('../middleware/authorization');




 
  router.post("/register",validInfo, async (req, res) => {
    const { firstName, lastName, userRole, userEmail, userSlack, userPassword, userGithub, userClassId ,username,userPhone,cyfCity,userDateOfBirth} = req.body;
    try {
      
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        userEmail
      ]);
       if (user.rows.length !== 0) {
       return res.status(401).json("User already exist!");
      }
      
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(userPassword, salt);

      let newUser = await pool.query(
        'INSERT INTO users (first_name, last_name, user_role,user_email,user_slack,user_password,user_github,class_id,username,user_phone,cyf_city,user_date_of_birth)'+
        ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *' ,
        [firstName, lastName, userRole, userEmail, userSlack, bcryptPassword, userGithub, userClassId, username, userPhone, cyfCity, userDateOfBirth]
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
      
         const user = await pool.query("select * from users where user_email=$1", [userEmail]);
        if (user.rows.length === 0) {
          return res.status(401).json("password is incorrect");
        }
               const validPassword = await bcrypt.compare(userPassword, user.rows[0].user_password);
               if (!validPassword) {
                 return res.status(401).json("password or emil is incorrect");
               }
               const token = jwtGenerator(user.rows[0].user_id);
               res.json({ token })  
      }
        catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
        
      }
           })
    
  router.get("/verify",authorization, async (req, res) => {
    try {
      console.log("passed the authorization");
     res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
  




module.exports= router;
var bodyParser = require("body-parser");

import { Router } from "express";

import { Connection } from "./db";

import { AuthorizationCode } from "simple-oauth2";

const router = new Router();
var cors = require("cors");
router.use(cors());
router.use(bodyParser.json());

const { Octokit } = require("@octokit/core");

const client = new AuthorizationCode({
  client: {
    //these would come from the github where the app is registered.
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
});

const authorizationUri = client.authorizeURL({
  //we can put in the redirect_uri when we deploy the app
  // redirect_uri: "https://designed-gd.herokuapp.com/login",
  redirect_uri:"http://localhost:3000/login",
  scope: "user",
  // expires_in: '30' something to look into later
  // state: '3(#0/!~',
});

router.get("/login", (req, res) => {
  res.redirect(authorizationUri);
});

// Callback service parsing the authorization token and asking for the access token
router.get("/callback", async (req, res) => {
  const { code } = req.query;
  const options = {
    code,
  };

  try {
    const accessToken = await client.getToken(options);
    console.log("acces token", accessToken);
    //accessing the token number from the above
    const token = accessToken.token.access_token;

    //authenticates the access_token sent by github during the Oauth2 flow
    const octokit = new Octokit({
      auth: token,
    });

    //this returns the authenticated user's username/login
    const { data } = await octokit.request("/user");
    return res.status(200).json(data.login);
  } catch (error) {
    console.error("Access Token Error", error.message);
    return res.status(500).json("Authentication failed");
  }
});

router.get("/graduates", (req, res) => {
  console.log("get graduates called");
  // Connection.connect((err) => {
  //   if (err) {
  //     return next(err);
  //   }
  Connection.query("SELECT * FROM graduates", (error, result) => {
    console.log("got query");
    if (result) {
      res.json(result.rows);
    } else {
      console.log("got error");
      res.send(error);
    }
  });
});

// create new profile
router.post("/graduates", function (req, res) {
  console.log(req.body)
  const newFirstName = req.body.first_name;
  const newSurname = req.body.surname;
  const aboutMe = req.body.about_me;
  const location = req.body.location;
  const interest=req.body.interest;
  const github=req.body.github_link;
  const linkedin=req.body.linkedin_link;
  const portfolio=req.body.portfolio_link;
  const github_id = req.body.github_id;
  const skills =req.body.skills.map(x=>x.toLowerCase());

  Connection.query(
          `insert into graduates (first_name, surname, about_me, location, interest, github_link, linkedin_link, portfolio_link, github_id ) values` +
            `($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`,
          [newFirstName, newSurname, aboutMe, location, interest, github, linkedin, portfolio, github_id],
          (error, result) => {
            if(result){
              let graduate_id=result.rows[0].id
              Connection.query(
                `insert into graduate_skill (graduate_id, skill_id)` +
                 ` select $1, id from skills where skill_name=ANY($2)`, [graduate_id, skills],
                (err,result)=>{
                  if (!err){
                    res.status(200).send('success')
                  }else{
                    console.log(err)
                  }
                })
            } else {
              res.status(404).send(error)
            } 
          }
          
        );
});



//checking the github username exist in our database
router.get("/accounts/:name", (req, res) => {
  const githubName = req.params.name;
  Connection.query(
    "SELECT * FROM github_accounts where account_name=$1 ",
    [githubName],
    (error, result) => {
      if (result.rowCount > 0) {
        let id = result.rows[0].id;
        Connection.query(
          "SELECT * FROM github_accounts GA join graduates G on(GA.id=G.github_id) where GA.account_name=$1 ",
          [githubName],
          (error, result) => {
            if (result.rowCount > 0) res.status(200).json(result.rows);
            else {
              res.status(206).send({ account_name: githubName, github_id: id });
            }
          }
        );
      } else
        res
          .status(404)
          .send("this is  github account does not belong to a CYF graduates");
    }
  );
});

router.get("/graduates/:id", (req, res) => {
  console.log('get request called', req.params.id)
  const github_id = parseInt(req.params.id);
  Connection.query(
    "select g.*, s.skill_name from graduates g join graduate_skill gs on g.id=gs.graduate_id join skills s on s.id=gs.skill_id where g.github_id=$1",
    [github_id],
    (error, result) => {
      if (result.rowCount > 0) res.json(result.rows);
      else
        res.status(404).send("It has not been added to the graduate table yet");
    }
  );
});

//editing existing graduate
router.put("/graduates/:id", function (req, res) {
  console.log("put request called", req.body);
  const github_id = req.params.id;
  const newFirstName = req.body.first_name;
  const newSurname = req.body.surname;
  const aboutMe = req.body.about_me;
  const location = req.body.location;
  const interest = req.body.interest;
  const github = req.body.github_link;
  const linkedin = req.body.linkedin_link;
  const portfolio = req.body.portfolio_link;
  const skills =req.body.skills.map(x=>x.toLowerCase());

  Connection.query(
    "update graduates set first_name=$1, surname=$2, about_me=$3, location=$4, interest=$5, github_link=$6, linkedin_link=$7, portfolio_link=$8 where github_id =$9 returning id",
    [
      newFirstName,
      newSurname,
      aboutMe,
      location,
      interest,
      github,
      linkedin,
      portfolio,
      github_id
    ],
    (error, result) => {
      if (result) {
        console.log('put query1 result', result)
        const graduate_id = result.rows[0].id
        Connection.query(
          "delete from graduate_skill where graduate_id=$1", [graduate_id],
          (error,result)=>{
            if(error) {
              res.status(404).send(error)
            } 
          }
        )
        Connection.query(
          `insert into graduate_skill (graduate_id, skill_id)` +
           ` select $1, id from skills where skill_name=ANY($2)`, [graduate_id, skills],
           (error, result)=>{
              if (!error){
                console.log('put query2 result', result)
                res.status(200).send('inserted succesfully')
              }
           }
        )
      } else {
        res.status(404).send(error);
      }
    }
  );
});

router.delete("/graduates/:id", function (req, res) {
  let graduateId;
  const github_id = parseInt(req.params.id);
  Connection.query(
    "SELECT * FROM graduates where github_id=$1 ",
    [github_id],
    (error, result) => {
      if (result.rowCount > 0) graduateId = result.rows[0].id;
      Connection.query(
        "delete from graduate_skill  where  graduate_id=$1",
        [graduateId],
        (error) => {
          if (error == undefined) {
            Connection.query(
              "delete from graduates  where  github_id=$1",
              [github_id],
              (error) => {
                if (error == undefined) {
                  res.send("graduate" + github_id + " deleted.");
                }
              }
            );
          }
        }
      );
    }
  );
});

export default router;
